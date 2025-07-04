import { Company } from "@/types/companies";
import { create } from "zustand";

type CompanyStore = {
  company: Company;
  setCompany: (companyName: Company) => void;
};

export const useCompanyStore = create<CompanyStore>()((set) => ({
  company: "JohnSnowLabs",
  setCompany: (companyName: Company) => set({ company: companyName }),
}));

type Role = "PROVIDERS" | "PAYERS" | "AUDITORS";

type RoleStore = {
  role: Role;
  setRole: (role: Role) => void;
};

export const useRoleStore = create<RoleStore>()((set) => ({
  role: "PROVIDERS",
  setRole: (role: Role) => set({ role }),
}));
