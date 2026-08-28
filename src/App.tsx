import React, { useState } from "react";
import Landing from "./pages/Landing";
import TalentProfile from "./pages/TalentProfile";
import BrowseOpportunities from "./pages/BrowseOpportunities";
import OpportunityDetail from "./pages/OpportunityDetail";
import MyApplications from "./pages/MyApplications";
import PostOpportunity from "./pages/PostOpportunity";
import OrgPanel from "./pages/OrgPanel";
import CandidateReview from "./pages/CandidateReview";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import ApplicationStatus from "./pages/ApplicationStatus";
import Reviews from "./pages/Reviews";
import OrgProfile from "./pages/OrgProfile";
import InstitutionalPlan from "./pages/InstitutionalPlan";
import Header from "./components/Header";

export type Screen =
  | "landing"
  | "talent-profile"
  | "browse"
  | "opportunity-detail"
  | "my-applications"
  | "post-opportunity"
  | "org-panel"
  | "candidate-review"
  | "auth"
  | "onboarding"
  | "messages"
  | "notifications"
  | "application-status"
  | "reviews"
  | "org-profile"
  | "institutional-plan";

export type UserRole = "talent" | "org" | null;
export type AuthMode = "login" | "signup";

export interface AppState {
  screen: Screen;
  role: UserRole;
  selectedOpportunityId: string | null;
  selectedCandidateId: string | null;
  authMode: AuthMode;
}

export default function App() {
  const [state, setState] = useState<AppState>({
    screen: "landing",
    role: null,
    selectedOpportunityId: null,
    selectedCandidateId: null,
    authMode: "login",
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
    auth: <Auth navigate={navigate} initialRole={state.role} initialMode={state.authMode} />,
    onboarding: <Onboarding navigate={navigate} role={state.role} />,
    messages: <Messages navigate={navigate} role={state.role} />,
    notifications: <Notifications navigate={navigate} role={state.role} />,
    "application-status": <ApplicationStatus navigate={navigate} />,
    reviews: <Reviews navigate={navigate} role={state.role} />,
    "org-profile": <OrgProfile navigate={navigate} />,
    "institutional-plan": <InstitutionalPlan navigate={navigate} />,
  };

  const showHeader = !["landing", "auth", "onboarding"].includes(state.screen);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {showHeader && <Header navigate={navigate} role={state.role} screen={state.screen} />}
      {screens[state.screen]}
    </div>
  );
}
