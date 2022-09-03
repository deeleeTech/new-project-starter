export interface Application {
  accessPermissionName: string;
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface AppState {
  showLoader: boolean;
  application: Application | null;
  user: null;
  acuityContext: null;
  accessToken: string | null;
  company: string | null;
}

export interface ApplicationParams {
  includeDeletedData?: boolean;
  includeInactiveData?: boolean;
  returnDeletedDataOnly?: boolean;
  orderByDirection?: string;
  orderByField?: string;
  applicationNameContains?: string;
  isDivisionContextRequired?: boolean;
}
