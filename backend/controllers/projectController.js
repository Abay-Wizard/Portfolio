import Project from "../models/projectModel.js";
import cloudinary from "../config/cloudinary.js";

const createProject = async (req, res) => {
  const { projectName, description, coverImage,githubLink,demoLink } = req.body;
  let imageUrl;

  try {
    if (!projectName || !description ||!githubLink ||!demoLink) {
      return res.status(401).json({
        success: false,
        message: "You need to fill all fields to create a project!",
      });
    }

    if (coverImage) {
      const uploadResponse = await cloudinary.uploader.upload(coverImage, {
        folder: "projects",
      });
      imageUrl = uploadResponse.secure_url;
    }

    const newProject = new Project({
      projectName,
      description,
      githubLink,
      demoLink,
      coverImage: imageUrl,
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: "Project created successfully!",
      data: newProject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { projectName, description, coverImage,demoLink,githubLink } = req.body;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found!" });
    }

    let finalImage = project.coverImage;

    if (coverImage && !coverImage.startsWith("https")) {
      const uploadResponse = await cloudinary.uploader.upload(coverImage, {
        folder: "projects",
      });
      finalImage = uploadResponse.secure_url;

      if (project.coverImage) {
        const publicId = project.coverImage
          .split("/")
          .slice(-1)[0]
          .split(".")[0];
        await cloudinary.uploader.destroy(`projects/${publicId}`);
      }
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { projectName, description, githubLink, demoLink,coverImage: finalImage },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully!",
      data: updatedProject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully!",
      data: projects,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

const getSingleProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Project fetched successfully!",
      data: project,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found!" });
    }

    if (project.coverImage) {
      const publicId = project.coverImage.split("/").slice(-1)[0].split(".")[0];
      await cloudinary.uploader.destroy(`projects/${publicId}`);
    }

    await Project.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
};
