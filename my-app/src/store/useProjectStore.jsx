import { create } from 'zustand';
import axios from 'axios';

const useProjectStore = create((set) => ({
  selectedProjectId: null,
  projectData: null,
  isModalOpen: false,
  setSelectedProjectId: (projectId) => set({ selectedProjectId: projectId }),
  setProjectData: (data) => set({ projectData: data }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  fetchProjectData: async (projectId) => {
    try {
      const response = await axios.post('/api/post', { postid: projectId });
      const data = response.data.post;

      const { status, isAttend } = data;

      set({ projectData: data });

      if (status && isAttend && isEnd) {
        set({ isModalOpen: true });
      }
    } catch (error) {
      console.error('Error fetching project data:', error);
      set({ projectData: null });
    }
  },
}));

export default useProjectStore;
