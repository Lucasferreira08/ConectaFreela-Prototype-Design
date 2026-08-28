import React, { useState } from "react";
import Landing from "./pages/Landing";
import TalentProfile from "./pages/TalentProfile";
import BrowseOpportunities from "./pages/BrowseOpportunities";
import OpportunityDetail from "./pages/OpportunityDetail";
import MyApplications from "./pages/MyApplications";
import PostOpportunity from "./pages/PostOpportunity";
import OrgPanel from "./pages/OrgPanel";
import CandidateReview from "./pages/CandidateReview";
import Header from "./components/Header";

export type Screen =
  | "landing"
  | "talent-profile"
  | "browse"
  | "opportunity-detail"
  | "my-applications"
  | "post-opportunity"
  | "org-panel"
  | "candidate-review";

export type UserRole = "talent" | "org" | null;

export interface AppState {
  screen: Screen;
  role: UserRole;
  selectedOpportunityId: string | null;
  selectedCandidateId: string | null;
}

export default function App() {
  const [state, setState] = useState<AppState>({
    screen: "landing",
    role: null,
    selectedOpportunityId: null,
    selectedCandidateId: null,
  });

  const navigate = (
    screen: Screen,
    extras?: Partial<Omit<AppState, "screen">>
  ) => {
    setState((prev) => ({ ...prev, screen, ...extras }));
  };

  const screens: Record<Screen, React.ReactElement> = {
    landing: <Landing navigate={navigate} />,
    "talent-profile": <TalentProfile navigate={navigate} />,
    browse: <BrowseOpportunities navigate={navigate} />,
    "opportunity-detail": (
      <OpportunityDetail
        navigate={navigate}
        opportunityId={state.selectedOpportunityId}
      />
    ),
    "my-applications": <MyApplications navigate={navigate} />,
    "post-opportunity": <PostOpportunity navigate={navigate} />,
    "org-panel": (
      <OrgPanel navigate={navigate} />
    ),
    "candidate-review": (
      <CandidateReview
        navigate={navigate}
        candidateId={state.selectedCandidateId}
        opportunityId={state.selectedOpportunityId}
      />
    ),
  };

  const showHeader = state.screen !== "landing";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {showHeader && <Header navigate={navigate} role={state.role} screen={state.screen} />}
      {screens[state.screen]}
    </div>
  );
}
