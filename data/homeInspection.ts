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

export const homeInspectionCurriculum: Module[] = [
  {
    id: "module-1",
    title: "The Regulatory Foundation",
    objective: "Master the legal hierarchy and the 'Why' behind the rules",
    content: [
      {
        title: "The Big Three Regulatory Frameworks",
        content: "Understanding the three primary regulatory bodies that govern AFH operations:",
        subsections: [
          {
            title: "WAC 51-51-0330: The Building Code Bible",
            content: "This is the Washington State Building Code specifically for Adult Family Homes. It governs all physical plant requirements including egress, accessibility, fire safety, and structural integrity.",
            items: [
              "Defines minimum window sizes and sill heights for emergency egress",
              "Establishes grab bar placement and strength requirements",
              "Sets standards for door widths and hardware",
              "Governs ramp slopes and accessibility features"
            ]
          },
          {
            title: "WAC 388-76 (10695/10700): DSHS Licensing Requirements",
            content: "These sections of the Washington Administrative Code govern the licensing and operational requirements for AFHs, including physical structure compliance.",
            items: [
              "WAC 388-76-10695: Physical environment requirements",
              "WAC 388-76-10700: Building and fire safety standards",
              "Integration with local building codes"
            ]
          },
          {
            title: "RCW 64.38.060: HOA Discrimination Shield",
            content: "This Revised Code of Washington protects AFH operators from Homeowners Association discrimination. HOAs cannot ban or unreasonably restrict licensed AFHs.",
            items: [
              "Prohibits HOA covenants that discriminate against AFHs",
              "Applies retroactively to existing covenants",
              "Allows reasonable sign regulations but not complete prohibition"
            ]
          }
        ]
      },
      {
        title: "The Consultant's Logic Framework",
        content: "When a client asks 'Why?', you don't say 'Because.' You cite the WAC and explain the logical reasoning:",
        subsections: [
          {
            title: "Logic Flow: Safety → Accessibility → Dignity",
            content: "Every regulation follows this hierarchy:",
            items: [
              "Safety First: Fire/Exit requirements protect lives",
              "Accessibility: Ensures residents can function independently",
              "Dignity: Privacy, space, and homelike environment"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "The Physical Pre-Inspection Walkthrough",
    objective: "A room-by-room practical guide based on WAC 51-51-0330",
    content: [
      {
        title: "Sleeping Rooms: The 5.7 Rule",
        content: "Every resident bedroom must have an emergency escape and rescue opening (window) that meets specific requirements:",
        subsections: [
          {
            title: "Window Clear Opening Requirements",
            content: "",
            items: [
              "Minimum net clear opening: 5.7 square feet (5.0 sq. ft. if at grade level)",
              "Minimum width: 20 inches",
              "Minimum height: 24 inches",
              "Maximum sill height: 44 inches from the floor",
              "No steps, raised platforms, or devices allowed to meet height requirement"
            ]
          },
          {
            title: "The 'One Hand' Rule",
            content: "Every door handle, faucet, and lock must be operable with one hand without 'tight grasping, pinching, or twisting':",
            items: [
              "Lever handles only (no round knobs)",
              "Maximum push/pull force: 5.0 pounds",
              "No double-cylinder deadbolts (keyed on both sides)",
              "All locks must be operable from inside without key or special knowledge"
            ]
          }
        ]
      },
      {
        title: "Bathroom & Grab Bar Mastery",
        content: "Grab bars are critical safety features that must meet exact specifications:",
        subsections: [
          {
            title: "Grab Bar Placement Requirements",
            content: "",
            items: [
              "Height: 33-36 inches from the floor",
              "Strength: Must support 250 pounds of force",
              "Diameter: 1.25 to 2 inches",
              "Clearance: 1.5 inches from wall",
              "Must be securely anchored into wall studs or blocking (no suction cups)"
            ]
          },
          {
            title: "Toilet Grab Bar Requirements",
            content: "",
            items: [
              "Side wall: Minimum 42 inches in length",
              "Back wall: Minimum 36 inches in length",
              "Both must be horizontal and within 33-36 inches of floor"
            ]
          },
          {
            title: "Shower/Tub Grab Bar Requirements",
            content: "",
            items: [
              "Back wall: Horizontal bar required",
              "Side wall: Horizontal bar required",
              "Vertical bars may be required depending on shower configuration",
              "All bars must meet the 33-36 inch height requirement"
            ]
          }
        ]
      },
      {
        title: "Ramps & Accessibility",
        content: "Outdoor and indoor navigation must accommodate wheelchairs and mobility devices:",
        subsections: [
          {
            title: "Ramp Slope Requirements",
            content: "",
            items: [
              "Maximum slope: 1:12 ratio (1 inch rise per 12 inches run)",
              "Minimum width: 36 inches between handrails",
              "Handrails required if rise is greater than 6 inches",
              "Handrail height: 34-38 inches",
              "Landings required at top and bottom (minimum 5 feet long)"
            ]
          },
          {
            title: "Door Width Requirements",
            content: "",
            items: [
              "Minimum clear width: 32 inches (27 inches for some existing structures)",
              "Swing-clear hinges can be used to widen door opening",
              "Thresholds must be 1/2 inch or less and beveled"
            ]
          }
        ]
      },
      {
        title: "Fire & Life Safety",
        content: "Critical safety systems that are frequently cited during inspections:",
        subsections: [
          {
            title: "Smoke Alarm Requirements",
            content: "",
            items: [
              "Required in every sleeping room",
              "Required at central location outside each sleeping area",
              "Must be interconnected (activation of one triggers all)",
              "Must be tested monthly (document in log)"
            ]
          },
          {
            title: "Carbon Monoxide Alarms",
            content: "",
            items: [
              "Required on each level of the home",
              "Required outside sleeping areas",
              "Must be tested regularly"
            ]
          },
          {
            title: "Fire Extinguishers",
            content: "",
            items: [
              "Minimum rating: 2A:10BC on each floor",
              "Must be mounted and readily accessible",
              "Must be inspected and tagged annually by professional"
            ]
          },
          {
            title: "Address Visibility",
            content: "",
            items: [
              "House numbers must be clearly visible from street",
              "Required for EMS and fire department access",
              "Often the first thing an inspector checks"
            ]
          }
        ]
      },
      {
        title: "Water Temperature Requirements",
        content: "Water temperature at resident-accessible taps must be maintained between 105°F and 120°F:",
        subsections: [
          {
            title: "Why This Range?",
            content: "",
            items: [
              "Below 105°F: Insufficient for hygiene and comfort",
              "Above 120°F: Severe scalding risk for elderly residents with thin skin",
              "Must be checked daily at main resident bathroom"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-3",
    title: "Change of Ownership (CHOW) & Expansion",
    objective: "Navigating WAC 388-76-10105 (CHOW) and 10035/10037 (Adding homes)",
    content: [
      {
        title: "CHOW Requirements (WAC 388-76-10105)",
        content: "A Change of Ownership occurs when 50% or more of the business ownership changes:",
        subsections: [
          {
            title: "CHOW Reality",
            content: "",
            items: [
              "A change in 50% or more ownership requires a new license application",
              "You cannot just 'take over' an existing license",
              "The buyer must apply for their own license",
              "The seller must provide 60 days' notice to residents"
            ]
          },
          {
            title: "CHOW Application Requirements",
            content: "",
            items: [
              "Copy of 60-day notice given to residents",
              "Copy of 60-day notice given to DSHS",
              "New owner must pass background check",
              "New owner must meet all qualification requirements",
              "New owner must sign new residency agreements with all residents"
            ]
          },
          {
            title: "Common CHOW Failure Points",
            content: "",
            items: [
              "Failure to provide 60-day notice (#1 reason for return)",
              "Buyer doesn't meet experience or training requirements",
              "Incomplete background checks for affiliated individuals",
              "Missing property ownership documentation"
            ]
          }
        ]
      },
      {
        title: "Second Home Rule (WAC 388-76-10035)",
        content: "To open a second AFH, the provider must meet specific requirements:",
        subsections: [
          {
            title: "The 24-Month Rule",
            content: "",
            items: [
              "Must have operated first home for 24 months continuously",
              "Must have no enforcement actions during that period",
              "Significant violations reset the 24-month clock"
            ]
          }
        ]
      },
      {
        title: "Capacity Increase (WAC 388-76-10037)",
        content: "Moving from 6 to 7 or 8 residents requires additional compliance:",
        subsections: [
          {
            title: "Sprinkler System Requirement (RCW 70.128.066)",
            content: "",
            items: [
              "Full residential sprinkler system required for 7-8 residents",
              "Must be hard-piped (no portable systems)",
              "Must be monitored by central monitoring station",
              "Every point in house must be within reach of sprinkler head",
              "Cost range: $15,000 to $30,000"
            ]
          },
          {
            title: "Additional Requirements",
            content: "",
            items: [
              "Building inspector must verify sprinkler system",
              "Egress must accommodate increased resident load",
              "Bathroom ratio must be sufficient (typically 1:4)",
              "Common space must be proportional to resident count"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-4",
    title: "The 'Passed' Checklist & Inspection Process",
    objective: "How to handle the local building inspector and ensure first-time success",
    content: [
      {
        title: "Pre-Inspection Documentation",
        content: "Essential documents that must be ready before the inspector arrives:",
        subsections: [
          {
            title: "Required Documents",
            content: "",
            items: [
              "Completed WABO Checklist (Sections 1-4 filled out)",
              "8.5 x 11 Floor Plan showing all rooms, exits, and labels",
              "Septic documentation (if applicable) - Health Department approval letter",
              "Well water test results (if applicable) - Group B water system approval",
              "Building permits for any modifications",
              "Fire drill logs (if home was previously occupied)"
            ]
          }
        ]
      },
      {
        title: "The Day-of-Inspection Checklist",
        content: "72-hour pre-inspection verification:",
        subsections: [
          {
            title: "Sleeping Rooms Verification",
            content: "",
            items: [
              "Egress window clear opening: 20\" wide x 24\" high = 5.7 sq. ft.",
              "Sill height: 44\" or less from floor",
              "Window opens easily without key or tool",
              "Closet doors (if present) openable from inside"
            ]
          },
          {
            title: "Doors & Hardware Verification",
            content: "",
            items: [
              "All resident doors have lever handles (no knobs)",
              "All bathroom doors have lever handles",
              "Exit doors unlockable from outside in emergency",
              "No double-cylinder deadbolts on exit doors"
            ]
          },
          {
            title: "Grab Bar Walkthrough",
            content: "",
            items: [
              "Toilet: Side wall bar (42\" min) and back wall bar (36\" min)",
              "Shower/Tub: Horizontal and vertical bars as required",
              "Strength check: Firm tug test - must be anchored to studs",
              "Height verification: 33-36 inches from floor"
            ]
          },
          {
            title: "Fire & Life Safety Verification",
            content: "",
            items: [
              "Interconnected smoke alarms: Test one, all should sound",
              "CO alarms on every level and near sleeping areas",
              "Sprinkler heads (if 7-8 residents): No paint, dust, or decorations",
              "Address visibility: Clearly visible from street"
            ]
          }
        ]
      },
      {
        title: "Consultant Best Practices",
        content: "Professional strategies for ensuring client success:",
        subsections: [
          {
            title: "The 'Golden Rule' of AFH Physical Plant",
            content: "Egress, Egress, Egress. If they can't get out, you can't open.",
            items: []
          },
          {
            title: "Pre-Inspection Walkthrough",
            content: "Conduct a consultant walkthrough before the official inspection:",
            items: [
              "Measure every window sill height",
              "Test every door handle and lock",
              "Verify water temperature at multiple taps",
              "Check all grab bar installations",
              "Test smoke alarm interconnection"
            ]
          },
          {
            title: "During the Inspection",
            content: "",
            items: [
              "Administrator must be present (never leave staff alone with inspector)",
              "Be transparent about any ongoing repairs (show permits)",
              "If inspector asks for something not in WAC, politely ask for the specific code section",
              "Document everything the inspector says"
            ]
          }
        ]
      },
      {
        title: "Handling a Failure: Correction Action Plan",
        content: "If a client fails an inspection, use this structured approach:",
        subsections: [
          {
            title: "The Three-Step Recovery",
            content: "",
            items: [
              "Step 1: Don't Argue, Document - Write down exactly what inspector says and ask for specific WAC/IRC section",
              "Step 2: Correction Request Email - Send follow-up within 24 hours with timeline for fixes",
              "Step 3: Consultant Walk-Back - Personally verify fixes before re-inspection (never trust 'close enough')"
            ]
          },
          {
            title: "Correction Action Plan Template",
            content: "Professional document showing inspector how and when fixes will be completed:",
            items: [
              "Item #: Number each deficiency",
              "Inspection Finding: Exact deficiency as stated by inspector",
              "Proposed Correction: Specific fix with method",
              "Timeline: Realistic completion date",
              "Evidence for Close-out: Photo documentation and permit sign-off"
            ]
          }
        ]
      }
    ]
  }
];

export const inspectionChecklist = {
  title: "The 'One-and-Done' Consultant Checklist",
  description: "Give this to your clients 72 hours before the inspector arrives",
  sections: [
    {
      title: "1. Documentation Prep",
      items: [
        "Completed WABO Checklist: Sections 1–4 must be filled out, signed, and ready",
        "The '8.5 x 11' Floor Plan: Clean, professional drawing showing all rooms, exits, and labels",
        "Septic Documentation (If applicable): Letter from Health Department stating system is approved",
        "Well Water Test (If applicable): Group B water system approval paperwork"
      ]
    },
    {
      title: "2. Sleeping Rooms (WAC 51-51-0330)",
      items: [
        "Egress Clear Opening: Verify window opens to at least 20\" wide and 24\" high with total net clear area of 5.7 sq. ft.",
        "Sill Height: Measure from floor to window opening; must be 44\" or less",
        "Window Function: Ensure window opens easily without key, tool, or 'special knowledge'",
        "Closet Safety: If closet has door, verify it can be opened from inside"
      ]
    },
    {
      title: "3. Doors & Hardware",
      items: [
        "Lever Handles: Check every resident bedroom, bathroom, and exit door. Round knobs must be replaced",
        "Locking Mechanisms: Verify all bedroom and bathroom doors can be unlocked from outside in emergency",
        "No Deadbolts: Remove any double-cylinder deadbolts (keyed on both sides) from exit doors"
      ]
    },
    {
      title: "4. Accessibility (The 'Grab Bar Walkthrough')",
      items: [
        "Toilet Support: One horizontal bar on side wall (42\" min) and one on back wall (36\" min)",
        "Shower/Tub Support: Two vertical bars and three horizontal bars (or as per R330.8.5)",
        "Strength Check: Give every bar firm 'tug' test. Must be anchored into studs or solid blocking",
        "Clear Width: Ensure all resident doorways have clear opening of at least 32 inches"
      ]
    },
    {
      title: "5. Fire & Life Safety",
      items: [
        "Interconnected Smoke Alarms: Test one; confirm they all sound",
        "CO Alarms: Verify presence on every level and near sleeping areas",
        "Sprinkler Heads (7-8 residents only): Ensure no paint, dust, or decorations touching sprinkler heads",
        "Address Visibility: Go outside. Can you see house numbers clearly from street?"
      ]
    }
  ]
};

