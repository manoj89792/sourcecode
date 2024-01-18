import axios from "axios";

// cookies
import Cookie from "js-cookie";

import type { Project, ProjectForm } from "@/types";

const baseURL = 'http://127.0.0.1:8000';

const fingerPrint = Cookie.get("finger_print");

export const getProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await axios.get(`${baseURL}/api/projects/`, {
      headers: {
        Authorization: `FingerPrint ${fingerPrint}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  try {
    const { data } = await axios.get(`${baseURL}/api/projects/${slug}/`, {
      headers: {
        Authorization: `FingerPrint ${fingerPrint}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const createProject = async (
  formData: ProjectForm
): Promise<Project> => {
  try {
    const { data } = await axios.post(`${baseURL}/api/projects/`, formData, {
      headers: {
        Authorization: `FingerPrint ${fingerPrint}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const updateProject = async (
  slug: string,
  formData: ProjectForm
): Promise<Project> => {
  try {
    const { data } = await axios.put(
      `${baseURL}/api/projects/${slug}/`,
      formData,
      {
        headers: {
          Authorization: `FingerPrint ${fingerPrint}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteProject = async (slug: string): Promise<void> => {
  try {
    await axios.delete(`${baseURL}/api/projects/${slug}/`, {
      headers: {
        Authorization: `FingerPrint ${fingerPrint}`,
      },
    });
  } catch (err) {
    throw err;
  }
};

export const executeCode = async (
  projectSlug: string,
  directoryId: string
): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${baseURL}/api/projects/${projectSlug}/run/${directoryId}/`,
      {
        headers: {
          Authorization: `FingerPrint ${fingerPrint}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const getBrowserIFrameCode = async (projectSlug: string) => {
  try {
    const { data } = await axios.get(
      `${baseURL}/api/projects/${projectSlug}/browser-iframe-code/`,
      {
        headers: {
          Authorization: `FingerPrint ${fingerPrint}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};
