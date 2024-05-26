import { create } from 'zustand';
import axios from 'axios';
import members from '../member.js';

const useTeamStore = create((set) => ({
  teamMembers: [],
  selectedMember: null,

  // !!!!!!!!!!! 지우기
  fetchTeamMembers: () => {
    set({ teamMembers: members });
  },

  markMemberAsEvaluated: (memberId) => {
    set((state) => ({
      ...state,
      teamMembers: state.teamMembers.map((member) =>
        member.id === memberId ? { ...member, isEvaluated: true } : member
      ),
    }));
  },
  // !!!!!!!!!!! 지우기

  // fetchTeamMembers: async () => {
  //   try {
  //     const response = await axios.get('https://api.example.com/team-members');
  //     set({ teamMembers: response.data });
  //   } catch (error) {
  //     console.error('Error fetching team members:', error);
  //   }
  // },
  selectMember: (member) => set({ selectedMember: member }),
  deselectMember: () => set({ selectedMember: null }),
}));

export default useTeamStore;
