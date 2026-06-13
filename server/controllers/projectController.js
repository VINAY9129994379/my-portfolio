import { pool } from "../config/db.js";

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM projects ORDER BY id DESC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Get Projects Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

// Get single project
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM projects WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const project = result.rows[0];

    if (typeof project.tech === "string") {
      project.tech = project.tech
        .replace(/[{}]/g, "")
        .split(",")
        .map((t) => t.trim());
    }

    return res.status(200).json({
      success: true,
      project,
    });

  } catch (error) {
    console.error("Get Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const {
      title,
      type,
      description,
      image,
      live,
      github,
      tech,
    } = req.body;

    const result = await pool.query( 
      `INSERT INTO projects
      (title, type, description, image, live, github, tech)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [title, type, description, image, live, github, tech]
    );

    res.status(201).json({
      success: true,
      project: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM projects WHERE id=$1",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Project deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};