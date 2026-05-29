import { AccountSummary } from "../../account/models/account-summary";
import { UserSummary } from "./user-summary";

export interface DashboardResponse {
    user: UserSummary;
    accounts: AccountSummary[];
}