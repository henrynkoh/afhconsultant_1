export interface Module {
  id: string;
  title: string;
  objective: string;
  content: Section[];
}

export interface Section {
  title: string;
  content: string;
  subsections?: Subsection[];
}

export interface Subsection {
  title: string;
  content: string;
  items?: string[];
}

export const applicationSubmissionCurriculum: Module[] = [
  {
    id: "module-1",
    title: "The BAAU & Legal Framework",
    objective: "Understand the role of the Business Analysis and Applications Unit (BAAU) and strict timelines",
    content: [
      {
        title: "The BAAU's Role",
        content: "The Business Analysis and Applications Unit (BAAU) is the specific unit within ALTSA that processes AFH applications:",
        subsections: [
          {
            title: "What BAAU Does",
            content: "",
            items: [
              "Processes all new AFH license applications",
              "Reviews financial solvency documentation",
              "Conducts background check verifications",
              "Coordinates with Residential Care Services (RCS) for inspections",
              "Cannot offer legal advice or physically edit applicant documents"
            ]
          },
          {
            title: "The 'Legal Document' Rule",
            content: "Your application is a legal document; the BAAU cannot write on it or make changes for you.",
            items: [
              "All corrections must be made by the applicant",
              "Consultants cannot write directly on the application",
              "BAAU requires authentic work of the applicant to ensure understanding of liabilities"
            ]
          }
        ]
      },
      {
        title: "Critical Timelines",
        content: "Understanding these deadlines is essential to avoid application voiding:",
        subsections: [
          {
            title: "The 60-Day Correction Window (WAC 388-76-10075)",
            content: "",
            items: [
              "If BAAU requests missing information or corrections, applicant has exactly 60 calendar days to return it",
              "Failure to meet this deadline results in application voiding",
              "Application fee is returned (minus processing costs) if voided",
              "Applicant must start entire process over if voided"
            ]
          },
          {
            title: "The One-Year Expiration (WAC 388-76-10075)",
            content: "",
            items: [
              "Application becomes void if applicant fails to obtain license within one calendar year of department's first request",
              "This prevents 'stale' applications with outdated background checks and financial data",
              "Clock starts from first request for additional information, not initial submission"
            ]
          }
        ]
      },
      {
        title: "Financial Solvency Requirements (WAC 388-76-10030)",
        content: "Applicants must prove financial stability before and during operation:",
        subsections: [
          {
            title: "Definition of Financial Solvency",
            content: "The ability to meet all financial obligations with 'some money to spare':",
            items: [
              "Must have sufficient funds to operate for at least 60 days without resident income",
              "Must show history of meeting personal and business financial obligations",
              "Having 'just enough' to pay bills is not sufficient - buffer required"
            ]
          },
          {
            title: "Financial Assessment Process",
            content: "",
            items: [
              "DSHS reviews credit reports for applicant, spouse, and entity representatives",
              "Medical debt is excluded from delinquency calculations",
              "60-day delinquent debt (excluding medical) can lead to denial",
              "Department may request bank statements, income verification, and asset documentation"
            ]
          },
          {
            title: "Financial Solvency Proof Folder",
            content: "Required documentation:",
            items: [
              "3-6 months of bank statements for all personal accounts",
              "Income verification (pay stubs, SSA/VA award letters)",
              "Credit reports (DSHS will obtain, but applicant should review)",
              "Asset documentation (vehicles, property, stocks)",
              "12-Month Cash Flow Projection",
              "Startup capital proof",
              "Staffing plan with labor cost projections"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "The Pre-Submission 'Mise en Place'",
    objective: "Preparing all supporting documentation to ensure electronic submission is complete",
    content: [
      {
        title: "Caregiving Experience Attestation (CEA)",
        content: "The 1,000-Hour Experience Rule (RCW 70.128.120):",
        subsections: [
          {
            title: "Experience Requirements",
            content: "",
            items: [
              "Must document at least 1,000 hours of successful direct caregiving experience",
              "Experience must be with non-family members in licensed setting (ALF, Nursing Home, etc.)",
              "Must be obtained within previous 60 months (5 years)",
              "Experience from 10 years ago does not qualify"
            ]
          },
          {
            title: "The CEA Form (DSHS 10-417)",
            content: "",
            items: [
              "Must be signed by someone with personal knowledge of the work",
              "Supervisor, co-worker, or resident can attest",
              "DSHS/DDA case managers cannot act as attestors",
              "Form must be notarized (invalid without notary seal)",
              "BAAU will return application as incomplete if not notarized"
            ]
          },
          {
            title: "Exemptions",
            content: "The following professionals are exempt from the 1,000-hour requirement:",
            items: [
              "Licensed Physicians",
              "Physician Assistants (PAs)",
              "Registered Nurses (RNs)",
              "Advanced Registered Nurse Practitioners (ARNPs)",
              "Licensed Practical Nurses (LPNs)"
            ]
          }
        ]
      },
      {
        title: "Background Check Requirements",
        content: "Criminal background checks are mandatory for multiple individuals:",
        subsections: [
          {
            title: "Who Must Be Checked",
            content: "",
            items: [
              "The applicant",
              "Spouse or domestic partner",
              "All household members age 11 and older",
              "Entity representatives with ownership interest",
              "Resident managers"
            ]
          },
          {
            title: "Background Check Process",
            content: "",
            items: [
              "Must be completed every two years for staff and household members",
              "Professional licenses (RN, LPN) do not exempt from background checks",
              "Authorization forms must be signed by all required individuals",
              "BAAU coordinates with Washington State Patrol for checks"
            ]
          }
        ]
      },
      {
        title: "Property Ownership Documentation",
        content: "Proof of property rights is required:",
        subsections: [
          {
            title: "If You Own the Property",
            content: "",
            items: [
              "Submit deed or property tax records",
              "Must show clear ownership"
            ]
          },
          {
            title: "If You Lease the Property",
            content: "",
            items: [
              "Must submit notarized written statement from property owner",
              "Statement must grant permission to operate an AFH",
              "Lease must be for minimum 12 months",
              "Landlord must understand AFH operations"
            ]
          }
        ]
      },
      {
        title: "Building Inspection Link",
        content: "The building inspection must be completed before license application:",
        subsections: [
          {
            title: "Required Documentation",
            content: "",
            items: [
              "AFH Building Inspection Checklist signed by local building official",
              "Must comply with WAC 51-51-0330",
              "Cannot submit license application without passing building inspection",
              "Building inspection and DSHS inspection are separate processes"
            ]
          }
        ]
      },
      {
        title: "Required Forms & Certifications",
        content: "Essential documents that must be current:",
        subsections: [
          {
            title: "DSHS Forms",
            content: "",
            items: [
              "DSHS 27-222: Consent to Release/Use Confidential Information",
              "DSHS 27-223: Disclosure of Services Attestation",
              "DSHS 10-417: Caregiver Experience Attestation (CEA)"
            ]
          },
          {
            title: "Certifications",
            content: "",
            items: [
              "Current First Aid/CPR certification (must not expire during review)",
              "Food Handlers card (must not expire during review)",
              "AFH Administrator Training completion certificate (48-hour course)"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-3",
    title: "Navigating the Web-Based Portal",
    objective: "Successfully using the online application system to minimize errors",
    content: [
      {
        title: "Secure Access Washington (SAW) Account",
        content: "The online portal for submitting applications:",
        subsections: [
          {
            title: "Setting Up SAW",
            content: "",
            items: [
              "Applicant must create SAW account",
              "Account is linked to applicant's identity",
              "Cannot use consultant's account - must be applicant's own account",
              "Keep login credentials secure"
            ]
          },
          {
            title: "Finding the BAAU Application",
            content: "",
            items: [
              "Navigate to Department of Social and Health Services",
              "Select Aging and Long-Term Support Administration (ALTSA)",
              "Choose Adult Family Home License Application",
              "Follow step-by-step prompts"
            ]
          }
        ]
      },
      {
        title: "Consistency in Naming",
        content: "Critical for avoiding application returns:",
        subsections: [
          {
            title: "Entity Name Matching",
            content: "",
            items: [
              "Entity name must match Secretary of State registration exactly",
              "Entity name must match Department of Revenue registration exactly",
              "Spelling, punctuation, and capitalization must be identical",
              "Name mismatches are a top reason for application return"
            ]
          },
          {
            title: "UBI and EIN",
            content: "",
            items: [
              "UBI (Unified Business Identifier) must match state records",
              "EIN (Employer Identification Number) if applicable",
              "Can use same UBI/EIN if moving AFH to new address (same entity)",
              "New entity requires new UBI"
            ]
          }
        ]
      },
      {
        title: "Electronic Record Keeping",
        content: "The BAAU is a 'record-collecting agency':",
        subsections: [
          {
            title: "Why Keep Your Own Copies",
            content: "",
            items: [
              "BAAU cannot return information once submitted",
              "You must keep complete digital and physical copies",
              "Consultants should maintain backup copies for clients",
              "Essential for responding to correction requests"
            ]
          },
          {
            title: "What to Keep",
            content: "",
            items: [
              "PDF copy of entire application",
              "All uploaded documents",
              "Email correspondence with BAAU",
              "Screenshots of submission confirmation",
              "Receipt for application fee payment"
            ]
          }
        ]
      },
      {
        title: "Notification Awareness",
        content: "BAAU communication is primarily via email:",
        subsections: [
          {
            title: "Email Management",
            content: "",
            items: [
              "Check spam/junk folders daily",
              "BAAU emails can be filtered as spam",
              "Missing 60-day deadline emails is a common failure point",
              "Set up email alerts for BAAU domain"
            ]
          },
          {
            title: "What to Expect",
            content: "",
            items: [
              "Automated PDF copy of submission via email",
              "If no email received, contact BAAU immediately",
              "15-21 days for initial screening",
              "Correction requests will come via email"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-4",
    title: "CHOW and Multi-Home Management",
    objective: "Specialized consulting for Change of Ownership and expansion",
    content: [
      {
        title: "Change of Ownership (CHOW) Requirements (WAC 388-76-10106)",
        content: "A CHOW occurs when 50% or more of business ownership changes:",
        subsections: [
          {
            title: "CHOW Application Requirements",
            content: "",
            items: [
              "Copy of 60-day notice given to residents (required by law)",
              "Copy of 60-day notice given to DSHS",
              "New owner must meet all qualification requirements",
              "New owner must pass background check",
              "New owner must sign new residency agreements with all residents",
              "Generally does not require new building inspection (unless structural changes)"
            ]
          },
          {
            title: "The 60-Day Notice",
            content: "This is the #1 reason CHOW applications are returned:",
            items: [
              "Must be provided to residents 60 days before transfer",
              "Must be provided to DSHS 60 days before transfer",
              "Protects resident rights - allows time to decide to stay or relocate",
              "Failure to provide notice is grounds for application denial"
            ]
          },
          {
            title: "Common CHOW Failure Points",
            content: "",
            items: [
              "Failure to provide 60-day notice (#1 reason)",
              "Buyer doesn't meet experience or training requirements",
              "Incomplete background checks for affiliated individuals",
              "Missing property ownership documentation",
              "Price increases during CHOW (requires proper written notice, usually 30 days)"
            ]
          }
        ]
      },
      {
        title: "Adding Homes (WAC 388-76-10035-10037)",
        content: "Requirements for existing providers to open second or subsequent homes:",
        subsections: [
          {
            title: "The 24-Month Rule (WAC 388-76-10035)",
            content: "",
            items: [
              "Must have operated first home for 24 months continuously",
              "Must have no enforcement actions during that period",
              "Significant violations reset the 24-month clock",
              "Must demonstrate successful operation before expansion"
            ]
          },
          {
            title: "Second Home Application Process",
            content: "",
            items: [
              "Must submit new license application for second home",
              "Must meet all standard application requirements",
              "Must provide evidence of 24 months of clean operation",
              "Must demonstrate financial capacity for multiple homes"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-5",
    title: "The Initial Licensing Interview",
    objective: "Preparing the applicant for the high-stakes RCS entrance interview",
    content: [
      {
        title: "The Entrance Interview (Attachment B1)",
        content: "Licensors will review application file, floor plan, and building inspection with applicant:",
        subsections: [
          {
            title: "What to Expect",
            content: "",
            items: [
              "Licensor will review entire application file",
              "Will walk through floor plan room by room",
              "Will verify building inspection checklist",
              "Will ask questions about resident care knowledge",
              "Administrator must be present (never leave staff alone with licensor)"
            ]
          },
          {
            title: "Key Interview Domains",
            content: "",
            items: [
              "Resident Rights: 'What do you do to promote resident dignity and privacy?'",
              "Emergency Management: 'When did you last participate in an evacuation drill?'",
              "Abuse/Neglect: 'Give an example of neglect and how you would report it'",
              "Daily Care: 'How do you help residents feel comfortable and ensure they have daily choices?'",
              "Mandatory Reporting: Understanding of reporting requirements"
            ]
          }
        ]
      },
      {
        title: "Pre-Interview Preparation",
        content: "Consultant's 'Shadow Interview' process:",
        subsections: [
          {
            title: "Mock Interview Practice",
            content: "",
            items: [
              "Use DSHS Form 10-561 (Staff Interview) as guide",
              "Practice speaking fluently about resident rights",
              "Review mandatory reporting scenarios",
              "Prepare examples of caregiving experience",
              "Practice explaining care philosophy"
            ]
          },
          {
            title: "Documentation Review",
            content: "",
            items: [
              "Verify all required documents are present",
              "Review floor plan for accuracy",
              "Confirm building inspection checklist is complete",
              "Ensure all certifications are current"
            ]
          }
        ]
      },
      {
        title: "Post-Interview: RCS Inspection Readiness",
        content: "After interview approval, preparing for initial inspection:",
        subsections: [
          {
            title: "DSHS 10-695 Prep Checklist",
            content: "Never let client call RCS for inspection until you verify:",
            items: [
              "Sinks at 105-120°F (tested and documented)",
              "Interconnected smoke alarms functioning",
              "Emergency evacuation floor plan posted on each level",
              "Grab bars properly installed and tested",
              "All required postings visible (license, ombudsman, resident rights)",
              "Medication storage secure and lockable",
              "Accident/Injury log present (even if empty)",
              "Fire drill log ready for first drill"
            ]
          }
        ]
      }
    ]
  }
];

export const applicationChecklist = {
  title: "Client Readiness Audit",
  description: "Final 10-point inspection before clicking submit",
  sections: [
    {
      title: "1. Experience Documentation",
      items: [
        "CEA form (DSHS 10-417) completed and notarized",
        "Attestor has personal knowledge of 1,000+ hours",
        "Experience within previous 60 months",
        "Experience in licensed setting with non-family members"
      ]
    },
    {
      title: "2. Financial Solvency Proof",
      items: [
        "3-6 months bank statements for all accounts",
        "12-Month Cash Flow Projection completed",
        "Proof of 60 days operating capital",
        "Credit report reviewed (medical debt excluded)"
      ]
    },
    {
      title: "3. Background Checks",
      items: [
        "All required individuals have submitted authorizations",
        "Applicant, spouse, household members 11+",
        "Entity representatives if applicable"
      ]
    },
    {
      title: "4. Property Documentation",
      items: [
        "Deed or property tax records (if owner)",
        "Notarized landlord permission letter (if leasing)",
        "Lease minimum 12 months"
      ]
    },
    {
      title: "5. Building Inspection",
      items: [
        "AFH Building Inspection Checklist signed by local official",
        "All corrections completed",
        "WAC 51-51-0330 compliance verified"
      ]
    },
    {
      title: "6. Required Forms",
      items: [
        "DSHS 27-222: Consent to Release Information",
        "DSHS 27-223: Disclosure of Services Attestation",
        "All forms signed and dated"
      ]
    },
    {
      title: "7. Certifications",
      items: [
        "First Aid/CPR current (won't expire during review)",
        "Food Handlers card current",
        "AFH Administrator Training certificate (48 hours)"
      ]
    },
    {
      title: "8. Entity Information",
      items: [
        "Entity name matches SOS registration exactly",
        "UBI number matches state records",
        "EIN if applicable"
      ]
    },
    {
      title: "9. SAW Account Setup",
      items: [
        "SAW account created in applicant's name",
        "Login credentials secured",
        "Email notifications enabled"
      ]
    },
    {
      title: "10. Documentation Copies",
      items: [
        "Complete digital copy of all documents",
        "Physical backup copies",
        "Email correspondence saved",
        "Submission confirmation screenshot"
      ]
    }
  ]
};

