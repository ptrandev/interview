export const isAdmin = (authUser) => !!authUser?.roles?.admin || !!authUser?.roles?.eboard;
export const isRecruitmentTeam = (authUser) => !!authUser?.roles?.recruitmentteam;
export const isApplicant = (authUser) => !!authUser?.roles?.applicant;
export const isLoggedIn = (authUser) => !!authUser;
export const isNonMember = (authUser) => !!authUser?.roles?.nonmember;
export const isMember = (authUser) => !!authUser?.roles?.upemember;

// TODO: Do we need functions for this? Why not compose existing functions
export const isApplicantOrRecruitmentTeam = (authUser) =>
  !!authUser?.roles?.applicant || !!authUser?.roles?.recruitmentteam;

