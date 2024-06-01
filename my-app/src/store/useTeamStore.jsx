import { create } from 'zustand';
import axios from 'axios';

const useTeamStore = create((set) => ({
  teamMembers: [],
  selectedMember: null,

  fetchTeamMembers: async (postId) => {
    try {
      const response = await axios.post('/api/end_post', {
        postid: postId,
      });
      set({ teamMembers: response.data.users });
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  },

  markMemberAsEvaluated: (memberId) => {
    set((state) => ({
      ...state,
      teamMembers: state.teamMembers.map((member) =>
        member.id === memberId ? { ...member, isEvaluated: true } : member
      ),
    }));
  },

  selectMember: (member) => set({ selectedMember: member }),
  deselectMember: () => set({ selectedMember: null }),
}));

export default useTeamStore;
