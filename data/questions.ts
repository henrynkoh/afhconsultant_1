export interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
  logic: string;
  reference: string;
}

export const questions: Question[] = [
  // Category 1: Legal & Regulatory Framework (10 questions)
  {
    id: 1,
    category: "Legal & Regulatory Framework",
    question: "Can an HOA or restrictive covenant prohibit an Adult Family Home from operating?",
    answer: "No. Per RCW 64.38.060, restrictive covenants cannot discriminate against AFHs.",
    logic: "This law protects AFH operators from HOA discrimination, ensuring that licensed facilities can operate in residential communities. The law applies retroactively to existing covenants.",
    reference: "RCW 64.38.060"
  },
  {
    id: 2,
    category: "Legal & Regulatory Framework",
    question: "Does the law regarding HOA discrimination apply retroactively?",
    answer: "Yes. It applies to any governing document regardless of when it was recorded (RCW 70.128.224).",
    logic: "The legislature intended this protection to apply broadly, preventing HOAs from using older covenants to circumvent the law.",
    reference: "RCW 70.128.224"
  },
  {
    id: 3,
    category: "Legal & Regulatory Framework",
    question: "How many months must you hold a license for your first home before applying for a second?",
    answer: "24 months of continuous operation (WAC 388-76-10035).",
    logic: "DSHS requires providers to demonstrate successful operation of their first home before allowing expansion. This ensures quality and compliance before taking on additional responsibility.",
    reference: "WAC 388-76-10035"
  },
  {
    id: 4,
    category: "Legal & Regulatory Framework",
    question: "What is the penalty for 'significant violations' during that 24-month period?",
    answer: "You will be barred from applying for a second license until the 24-month 'clean' period is met.",
    logic: "Significant violations indicate the provider may not be ready for expansion. The clock resets to ensure only providers with consistent compliance can expand.",
    reference: "WAC 388-76-10035"
  },
  {
    id: 5,
    category: "Legal & Regulatory Framework",
    question: "Who has the authority to do the initial inspection for a new AFH?",
    answer: "The local building official/inspector from the city or county.",
    logic: "Building code compliance is enforced by local jurisdictions, while DSHS handles care and licensing standards. These are separate but complementary inspections.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 6,
    category: "Legal & Regulatory Framework",
    question: "What is the difference between IRC and IBC?",
    answer: "IRC is for Residential construction; IBC is for Commercial. AFHs typically fall under IRC with specific Washington State amendments.",
    logic: "AFHs are residential facilities, so they follow residential building codes (IRC) rather than commercial codes, but with additional safety requirements for vulnerable adults.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 7,
    category: "Legal & Regulatory Framework",
    question: "Can an HOA limit the size of a sign for an AFH?",
    answer: "Yes, they can regulate signs, but the regulations cannot be more restrictive than those applied to other residential properties.",
    logic: "HOAs can have reasonable sign regulations, but they cannot use sign restrictions to effectively ban AFHs or treat them differently than other homes.",
    reference: "RCW 64.38.060"
  },
  {
    id: 8,
    category: "Legal & Regulatory Framework",
    question: "True or False: If you move your AFH to a new house, you can keep the same license.",
    answer: "False. A license is for a specific person and a specific address. A new license is required.",
    logic: "Licenses are site-specific because building inspections, fire safety, and local approvals are tied to the physical location. Moving requires a new application.",
    reference: "WAC 388-76-10005"
  },
  {
    id: 9,
    category: "Legal & Regulatory Framework",
    question: "What does WABO stand for?",
    answer: "Washington Association of Building Officials.",
    logic: "WABO provides standardized checklists and guidance for building officials conducting AFH inspections across Washington State.",
    reference: "WABO Checklist"
  },
  {
    id: 10,
    category: "Legal & Regulatory Framework",
    question: "What is the purpose of the 'Change of Use' permit?",
    answer: "To legally convert a private residence into a 24-hour care facility.",
    logic: "Local jurisdictions require this permit because operating a care facility changes the occupancy classification and triggers additional building code requirements.",
    reference: "Local Building Code"
  },

  // Category 2: Physical Plant & Safety (20 questions)
  {
    id: 11,
    category: "Physical Plant & Safety",
    question: "What is the maximum height a window sill can be from the floor in a resident's room?",
    answer: "44 inches.",
    logic: "This height allows for safe egress for elderly residents and enables rescue entry by emergency personnel. Heights above 44 inches create a barrier to escape.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 12,
    category: "Physical Plant & Safety",
    question: "Can you use a step or a permanent box to help a resident reach a high window?",
    answer: "No. Steps or platforms are strictly prohibited to meet egress height.",
    logic: "WAC 51-51-0330 Section 6 prohibits steps, raised platforms, or other devices because they create fall hazards and are unreliable in emergencies.",
    reference: "WAC 51-51-0330 Section 6"
  },
  {
    id: 13,
    category: "Physical Plant & Safety",
    question: "What is the minimum net clear opening for an emergency escape window?",
    answer: "5.7 square feet (or 5.0 sq. ft. if the window is at ground level).",
    logic: "This size ensures that both residents and emergency responders can pass through the opening. Ground-level windows can be slightly smaller (5.0 sq. ft.) because they don't require rescue from outside.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 14,
    category: "Physical Plant & Safety",
    question: "What is the minimum width of an escape window opening?",
    answer: "20 inches.",
    logic: "This width accommodates the shoulder width of an average adult, ensuring safe passage during emergency egress.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 15,
    category: "Physical Plant & Safety",
    question: "What is the minimum height of an escape window opening?",
    answer: "24 inches.",
    logic: "This height allows for safe passage while maintaining structural integrity of the window frame.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 16,
    category: "Physical Plant & Safety",
    question: "Must every resident bedroom have a door that leads directly to the outside?",
    answer: "No, but they must have an 'emergency escape and rescue opening' (usually a window).",
    logic: "While direct exterior doors are ideal, properly sized and positioned windows serve as adequate emergency egress when they meet the 5.7 sq. ft. and 44-inch sill requirements.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 17,
    category: "Physical Plant & Safety",
    question: "What is the maximum 'push/pull' force allowed for a door?",
    answer: "5.0 pounds.",
    logic: "Elderly residents with limited strength must be able to operate doors independently. Doors requiring more than 5 pounds of force create accessibility barriers.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 18,
    category: "Physical Plant & Safety",
    question: "What type of door hardware is required for resident use?",
    answer: "Lever-style handles (no round knobs requiring tight grasping).",
    logic: "Lever handles can be operated with one hand without tight grasping, pinching, or twisting - essential for residents with arthritis or limited dexterity.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 19,
    category: "Physical Plant & Safety",
    question: "Are 'double-cylinder' deadbolts (requiring a key from the inside) allowed?",
    answer: "Strictly prohibited. Locks must be operable from the inside without a key or special knowledge.",
    logic: "Double-cylinder deadbolts create life-safety hazards. In an emergency, residents must be able to exit immediately without searching for keys.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 20,
    category: "Physical Plant & Safety",
    question: "Where must smoke alarms be installed?",
    answer: "In every sleeping room and at a central location outside each sleeping area.",
    logic: "This placement ensures early detection of fires and provides multiple layers of protection. Alarms outside sleeping areas alert staff and other residents.",
    reference: "WAC 51-51-0330 Section 5"
  },
  {
    id: 21,
    category: "Physical Plant & Safety",
    question: "Do smoke alarms need to be interconnected?",
    answer: "Yes. If one goes off, they must all go off.",
    logic: "Interconnection ensures that a fire detected in one area alerts everyone in the home immediately, regardless of where they are located.",
    reference: "WAC 51-51-0330 Section 5"
  },
  {
    id: 22,
    category: "Physical Plant & Safety",
    question: "How often should smoke alarms be tested?",
    answer: "Monthly (Best practice for compliance logs).",
    logic: "Regular testing ensures alarms are functional. Monthly testing is documented in logs, which are reviewed during inspections.",
    reference: "Best Practice"
  },
  {
    id: 23,
    category: "Physical Plant & Safety",
    question: "What is the requirement for Carbon Monoxide alarms?",
    answer: "They must be installed on each level and outside sleeping areas.",
    logic: "CO is odorless and deadly. Placement on each level ensures detection regardless of where the source is located.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 24,
    category: "Physical Plant & Safety",
    question: "What is the maximum water temperature at the tap?",
    answer: "120°F.",
    logic: "Temperatures above 120°F pose severe scalding risk to elderly residents with thin skin or sensory deficits. This is a critical safety requirement.",
    reference: "WAC 388-76-10750"
  },
  {
    id: 25,
    category: "Physical Plant & Safety",
    question: "What is the minimum water temperature at the tap?",
    answer: "105°F.",
    logic: "Temperatures below 105°F are insufficient for effective hygiene and resident comfort. The 105-120°F range balances safety and functionality.",
    reference: "WAC 388-76-10750"
  },
  {
    id: 26,
    category: "Physical Plant & Safety",
    question: "Are fire extinguishers required?",
    answer: "Yes, at least one 2A:10BC rated extinguisher on each floor.",
    logic: "Fire extinguishers provide first-line defense against small fires. The 2A:10BC rating covers common combustibles (A) and electrical/flammable liquid fires (BC).",
    reference: "WAC 388-76-10885"
  },
  {
    id: 27,
    category: "Physical Plant & Safety",
    question: "Can a resident room be located in a basement?",
    answer: "Only if the basement meets all egress and 'Type NS' safety requirements.",
    logic: "Basements can be used if they have proper emergency egress windows, adequate ceiling height, and meet all accessibility requirements. Type NS (Non-Sleeping) classifications have specific restrictions.",
    reference: "WAC 51-51-0330"
  },
  {
    id: 28,
    category: "Physical Plant & Safety",
    question: "What is a 'Type NS1' resident?",
    answer: "A resident who can physically and mentally respond to an alarm and exit without help.",
    logic: "This classification determines egress requirements. NS1 residents can use standard egress routes, while NS2 residents need additional assistance systems.",
    reference: "WAC 388-76-10695"
  },
  {
    id: 29,
    category: "Physical Plant & Safety",
    question: "What is a 'Type NS2' resident?",
    answer: "A resident who needs assistance to exit.",
    logic: "NS2 residents require staff assistance for evacuation, which impacts staffing requirements and emergency planning.",
    reference: "WAC 388-76-10695"
  },
  {
    id: 30,
    category: "Physical Plant & Safety",
    question: "If you have even one resident who cannot walk, what must the exits have?",
    answer: "Ramps with a specific slope (1:12).",
    logic: "Wheelchair-using residents require ramps instead of steps. The 1:12 slope (1 inch rise per 12 inches run) is the maximum safe slope for manual wheelchairs.",
    reference: "WAC 51-51-0330"
  },

  // Category 3: Bathrooms & Grab Bars (10 questions)
  {
    id: 31,
    category: "Bathrooms & Grab Bars",
    question: "What is the required height for grab bars?",
    answer: "33 to 36 inches from the floor.",
    logic: "This height range accommodates most adults' natural reach when seated or standing. Bars outside this range are ineffective or create fall risks.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 32,
    category: "Bathrooms & Grab Bars",
    question: "How much weight must a grab bar be able to support?",
    answer: "250 pounds.",
    logic: "Grab bars must support the full weight of an adult falling or transferring. This strength requirement ensures bars don't pull out of walls during use.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 33,
    category: "Bathrooms & Grab Bars",
    question: "What is the required diameter of a grab bar?",
    answer: "1.25 to 2 inches.",
    logic: "This diameter range allows for comfortable grip without requiring tight grasping. Bars too small or too large are difficult for elderly hands to use effectively.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 34,
    category: "Bathrooms & Grab Bars",
    question: "Is a 'suction cup' grab bar allowed?",
    answer: "No. They must be securely anchored into wall studs or blocking.",
    logic: "Suction cup bars can detach under force, creating serious fall hazards. Permanent installation into structural members ensures reliability.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 35,
    category: "Bathrooms & Grab Bars",
    question: "How much space must be between the wall and the grab bar?",
    answer: "1.5 inches.",
    logic: "This clearance allows fingers to wrap around the bar while maintaining close proximity to the wall for stability during transfers.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 36,
    category: "Bathrooms & Grab Bars",
    question: "Where must grab bars be placed in a shower?",
    answer: "On the back wall and the side wall.",
    logic: "Placement on both walls provides support for entering, exiting, and maneuvering within the shower. Specific configuration depends on shower type (stall vs. tub).",
    reference: "WAC 51-51-0330 R330.8.5"
  },
  {
    id: 37,
    category: "Bathrooms & Grab Bars",
    question: "Where must grab bars be placed for a toilet?",
    answer: "On the side wall and behind the toilet.",
    logic: "Side wall bar assists with sitting/standing transfers. Back wall bar provides stability while seated. Both are essential for safe toilet use.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 38,
    category: "Bathrooms & Grab Bars",
    question: "What is the minimum length for a grab bar behind a toilet?",
    answer: "36 inches.",
    logic: "This length provides adequate support surface for residents to reach and use the bar effectively while seated on the toilet.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 39,
    category: "Bathrooms & Grab Bars",
    question: "What is the minimum length for a grab bar on the side wall near a toilet?",
    answer: "42 inches.",
    logic: "The side wall bar must extend far enough forward to assist with the transfer motion from standing to sitting. 42 inches provides this reach.",
    reference: "WAC 51-51-0330 R330.8"
  },
  {
    id: 40,
    category: "Bathrooms & Grab Bars",
    question: "Must bathrooms have a non-slip surface?",
    answer: "Yes, showers and tubs must have slip-resistant surfaces.",
    logic: "Wet bathroom surfaces are a primary fall hazard. Non-slip surfaces reduce the risk of falls during bathing activities.",
    reference: "WAC 388-76-10700"
  },

  // Category 4: Ramps & Accessibility (10 questions)
  {
    id: 41,
    category: "Ramps & Accessibility",
    question: "What is the maximum slope for a ramp?",
    answer: "1 vertical unit for every 12 horizontal units (1:12).",
    logic: "This is the maximum safe slope for manual wheelchairs. Steeper slopes require excessive upper body strength and create rollback risks.",
    reference: "WAC 51-51-0330 R330.9"
  },
  {
    id: 42,
    category: "Ramps & Accessibility",
    question: "What is the minimum width of a ramp?",
    answer: "36 inches.",
    logic: "This width accommodates standard wheelchairs (typically 24-26 inches wide) with clearance on both sides for handrails and maneuvering.",
    reference: "WAC 51-51-0330 R330.9"
  },
  {
    id: 43,
    category: "Ramps & Accessibility",
    question: "When are handrails required on a ramp?",
    answer: "If the ramp rise is greater than 6 inches.",
    logic: "Handrails provide stability and safety. Ramps with more than 6 inches of rise pose sufficient risk to require handrail protection.",
    reference: "WAC 51-51-0330 R330.9"
  },
  {
    id: 44,
    category: "Ramps & Accessibility",
    question: "What is the height requirement for handrails?",
    answer: "34 to 38 inches.",
    logic: "This height range allows most adults to comfortably grip the rail while walking or using a wheelchair. It's the standard ADA-compliant height.",
    reference: "WAC 51-51-0330 R330.9"
  },
  {
    id: 45,
    category: "Ramps & Accessibility",
    question: "Does a ramp need a landing at the top and bottom?",
    answer: "Yes. Landings must be at least as wide as the ramp and 5 feet long.",
    logic: "Landings provide space for residents to rest, turn around, and open doors. The 5-foot length accommodates wheelchair turning radius.",
    reference: "WAC 51-51-0330 R330.9"
  },
  {
    id: 46,
    category: "Ramps & Accessibility",
    question: "Can a ramp be made of wood?",
    answer: "Yes, but it must be slip-resistant and weather-protected.",
    logic: "Wood ramps are acceptable if properly treated and maintained. They must have non-slip surfaces and protection from weather deterioration.",
    reference: "WAC 51-51-0330 R330.9"
  },
  {
    id: 47,
    category: "Ramps & Accessibility",
    question: "What is the minimum door width for a resident room?",
    answer: "32 inches clear width.",
    logic: "This width accommodates standard wheelchairs and walkers. Some existing structures may have 27-inch minimums, but 32 inches is the modern safety standard.",
    reference: "WAC 388-76-10750"
  },
  {
    id: 48,
    category: "Ramps & Accessibility",
    question: "Can you use 'swing-clear' hinges to widen a door?",
    answer: "Yes, this is a common 'consultant' trick to avoid widening the frame.",
    logic: "Swing-clear hinges allow the door to swing completely out of the opening, maximizing clear width without structural modifications. This is a cost-effective solution.",
    reference: "Best Practice"
  },
  {
    id: 49,
    category: "Ramps & Accessibility",
    question: "Are carpets allowed in resident rooms?",
    answer: "Yes, but they must be low-pile and securely fastened to prevent trips.",
    logic: "Carpets can provide comfort and reduce noise, but high-pile or loose carpets create trip hazards. They must be properly installed and maintained.",
    reference: "WAC 388-76-10700"
  },
  {
    id: 50,
    category: "Ramps & Accessibility",
    question: "Is a threshold allowed at the door?",
    answer: "Only if it is 1/2 inch high or less and beveled.",
    logic: "Thresholds create barriers for wheelchairs and walkers. If present, they must be minimal (1/2 inch) and beveled to allow smooth passage.",
    reference: "WAC 51-51-0330"
  },

  // Category 5: Change of Ownership (CHOW) (10 questions)
  {
    id: 51,
    category: "Change of Ownership (CHOW)",
    question: "What defines a CHOW?",
    answer: "A change of 50% or more in the ownership of the business.",
    logic: "This threshold ensures that significant ownership changes trigger the full application process, protecting residents from unqualified operators.",
    reference: "WAC 388-76-10105"
  },
  {
    id: 52,
    category: "Change of Ownership (CHOW)",
    question: "Does the new owner need to pass a background check?",
    answer: "Yes, before the CHOW is approved.",
    logic: "All licensees must pass background checks regardless of how they acquire the license. This ensures resident safety.",
    reference: "WAC 388-76-10105"
  },
  {
    id: 53,
    category: "Change of Ownership (CHOW)",
    question: "Is the provider's license transferable to a buyer?",
    answer: "No. The buyer must apply for their own license.",
    logic: "Licenses are non-transferable because they are tied to specific individuals who have met qualification requirements. Each new owner must be qualified.",
    reference: "WAC 388-76-10105"
  },
  {
    id: 54,
    category: "Change of Ownership (CHOW)",
    question: "How many days' notice must a provider give residents before a CHOW?",
    answer: "60 days' notice.",
    logic: "This notice period protects resident rights by giving them time to decide whether to stay under new management or relocate. It's the #1 reason CHOW applications are returned.",
    reference: "WAC 388-76-10106"
  },
  {
    id: 55,
    category: "Change of Ownership (CHOW)",
    question: "What happens to the 'Residency Agreements' during a CHOW?",
    answer: "The new owner must sign new agreements with all residents.",
    logic: "Residency agreements are contracts between specific parties. New ownership requires new agreements to ensure all parties understand the new relationship.",
    reference: "WAC 388-76-10106"
  },
  {
    id: 56,
    category: "Change of Ownership (CHOW)",
    question: "Can the price of care be increased immediately during a CHOW?",
    answer: "Only with proper written notice (usually 30 days).",
    logic: "Residents have rights regarding rate increases. Even during CHOW, proper notice must be given before rates can change.",
    reference: "RCW 70.128.150"
  },
  {
    id: 57,
    category: "Change of Ownership (CHOW)",
    question: "Does a CHOW require a new building inspection?",
    answer: "Often, yes, to ensure the home still meets code under the new license.",
    logic: "While not always required, building officials may require re-inspection to verify the home still meets current code standards under new ownership.",
    reference: "WAC 388-76-10105"
  },
  {
    id: 58,
    category: "Change of Ownership (CHOW)",
    question: "What is the most common reason a CHOW fails?",
    answer: "The buyer doesn't meet the experience or training requirements.",
    logic: "Buyers often assume they can simply take over, but they must meet all the same qualification requirements as new applicants, including 1,000 hours of experience.",
    reference: "WAC 388-76-10105"
  },
  {
    id: 59,
    category: "Change of Ownership (CHOW)",
    question: "If a provider dies, can the family keep operating?",
    answer: "Only temporarily with DSHS approval; a CHOW or closure must follow.",
    logic: "Licenses are non-transferable even upon death. Family members must either apply for their own license (CHOW) or close the home.",
    reference: "WAC 388-76-10105"
  },
  {
    id: 60,
    category: "Change of Ownership (CHOW)",
    question: "What is a 'Business Valued' CHOW?",
    answer: "When the buyer buys both the real estate and the AFH business operations.",
    logic: "This distinguishes between buying just the property versus buying the ongoing business. Both scenarios require CHOW if ownership changes 50% or more.",
    reference: "WAC 388-76-10105"
  },

  // Category 6: Application & Licensing (20 questions)
  {
    id: 61,
    category: "Application & Licensing",
    question: "When must an AFH obtain liability insurance?",
    answer: "Before admitting the first resident OR within 10 working days of license issuance (WAC 388-76-10191).",
    logic: "Insurance is a critical safety net for residents. It must be in place before care begins or immediately upon licensure to protect all parties.",
    reference: "WAC 388-76-10191"
  },
  {
    id: 62,
    category: "Application & Licensing",
    question: "What are the minimum coverage limits for General Liability?",
    answer: "$500,000 per occurrence and $1,000,000 aggregate (WAC 388-76-10192).",
    logic: "The 'per occurrence' limit protects against a single large claim, while the 'aggregate' covers total claims for the year. This ensures adequate protection for multiple incidents.",
    reference: "WAC 388-76-10192"
  },
  {
    id: 63,
    category: "Application & Licensing",
    question: "Who must be listed as an 'Additional Insured' on the policy?",
    answer: "The State of Washington, the Department (DSHS), and its officials/agents.",
    logic: "This ensures the Department is notified immediately if the policy is canceled, protecting the state's liability interest and resident safety.",
    reference: "WAC 388-76-10192"
  },
  {
    id: 64,
    category: "Application & Licensing",
    question: "How many hours of caregiving experience are required before applying?",
    answer: "1,000 documented hours (DSHS 10-417).",
    logic: "This requirement ensures providers have practical, hands-on competency before taking responsibility for vulnerable adults. Experience must be recent (within 60 months).",
    reference: "RCW 70.128.120"
  },
  {
    id: 65,
    category: "Application & Licensing",
    question: "How many calendar days do you have to respond to a BAAU request for more information?",
    answer: "60 days.",
    logic: "Failing this deadline leads to a voided application. The 60-day window ensures applications don't become stale while giving applicants reasonable time to gather information.",
    reference: "WAC 388-76-10075"
  },
  {
    id: 66,
    category: "Application & Licensing",
    question: "How long is an application valid before it is voided due to lack of licensure?",
    answer: "One calendar year from the department's first request for additional information.",
    logic: "This prevents stale applications with outdated background checks and financial data. The clock starts from first request, not initial submission.",
    reference: "WAC 388-76-10075"
  },
  {
    id: 67,
    category: "Application & Licensing",
    question: "What is the purpose of the CEA form?",
    answer: "To attest to 1,000 hours of caregiving experience.",
    logic: "The Caregiver Experience Attestation (CEA) form provides documented proof of the required experience. It must be notarized and signed by someone with personal knowledge.",
    reference: "DSHS 10-417"
  },
  {
    id: 68,
    category: "Application & Licensing",
    question: "Does the BAAU return your original documents if your application is voided?",
    answer: "No. (Logic: BAAU is a record-collecting agency; you must keep copies).",
    logic: "The BAAU is a record-collecting agency and cannot return submitted documents. Applicants must maintain their own complete copies of everything submitted.",
    reference: "BAAU Policy"
  },
  {
    id: 69,
    category: "Application & Licensing",
    question: "Who must sign the Background Check Authorization?",
    answer: "The applicant and all affiliated individuals (e.g., spouse, resident manager).",
    logic: "All individuals with access to residents or the home must be background checked. This includes household members age 11 and older.",
    reference: "WAC 388-76-10165"
  },
  {
    id: 70,
    category: "Application & Licensing",
    question: "What is the #1 reason CHOW applications are returned?",
    answer: "Failure to provide the required 60-day notice to residents.",
    logic: "The 60-day notice is a legal requirement that protects resident rights. Failure to provide it is grounds for application denial.",
    reference: "WAC 388-76-10106"
  },
  {
    id: 71,
    category: "Application & Licensing",
    question: "Is medical debt counted against your financial solvency?",
    answer: "No.",
    logic: "WAC 388-76-10030 specifically excludes medical debt from delinquency calculations, recognizing that medical expenses are often beyond individual control.",
    reference: "WAC 388-76-10030"
  },
  {
    id: 72,
    category: "Application & Licensing",
    question: "Can a provider use the same UBI and EIN if they are moving an AFH to a new address?",
    answer: "Yes, as long as the business entity remains the same.",
    logic: "UBI and EIN are tied to the business entity, not the physical location. Moving to a new address with the same entity allows retention of these identifiers.",
    reference: "Business Registration"
  },
  {
    id: 73,
    category: "Application & Licensing",
    question: "What happens if you miss the 60-day deadline to correct an application?",
    answer: "The application is voided and the application fee is returned (minus processing).",
    logic: "The 60-day deadline is strict. Missing it requires starting the entire process over, including paying new fees and resubmitting all documents.",
    reference: "WAC 388-76-10075"
  },
  {
    id: 74,
    category: "Application & Licensing",
    question: "After submitting an application, what is the primary way the BAAU will contact you?",
    answer: "Email. Applicants must check their spam folder daily to avoid missing 60-day deadlines.",
    logic: "BAAU communicates almost exclusively via email. These emails can be filtered as spam, so daily checking is essential to avoid missing critical deadlines.",
    reference: "BAAU Policy"
  },
  {
    id: 75,
    category: "Application & Licensing",
    question: "If you are doing a Change of Ownership (CHOW), do you still need a building inspection?",
    answer: "Generally no, but you must submit the 60-day notice given to residents.",
    logic: "CHOWs typically don't require new building inspections unless structural changes are made. However, the 60-day notice is mandatory and must be documented.",
    reference: "WAC 388-76-10106"
  },
  {
    id: 76,
    category: "Application & Licensing",
    question: "Can you operate under the previous owner's license during a CHOW?",
    answer: "No. You must have your own license issued before taking over operations.",
    logic: "Licenses are non-transferable. The new owner must have their own approved license before assuming operations. Operating without a license is illegal.",
    reference: "WAC 388-76-10105"
  },
  {
    id: 77,
    category: "Application & Licensing",
    question: "What must be posted on each level of the house before the RCS inspection?",
    answer: "An emergency evacuation floor plan showing routes, doors, windows, and the outdoor meeting place.",
    logic: "This visual guide is essential for emergency response. It must be posted on every level so staff and residents can quickly identify escape routes.",
    reference: "WAC 388-76-10805"
  },
  {
    id: 78,
    category: "Application & Licensing",
    question: "What is the required temperature for the kitchen sink and main bathroom?",
    answer: "Between 105°F and 120°F.",
    logic: "This range prevents scalding while ensuring effective hygiene. Temperatures must be checked daily and documented.",
    reference: "WAC 388-76-10750"
  },
  {
    id: 79,
    category: "Application & Licensing",
    question: "True or False: A licensor will only look at the bedrooms where residents live.",
    answer: "False. The licensor will inspect all common areas, kitchens, and laundry areas to ensure compliance with health and safety.",
    logic: "Licensors conduct comprehensive inspections of all areas accessible to residents, not just bedrooms. Common areas, kitchens, and utility areas are all subject to inspection.",
    reference: "DSHS Inspection Protocol"
  },
  {
    id: 80,
    category: "Application & Licensing",
    question: "How many hours of training must a licensee complete before a license is issued?",
    answer: "A minimum of 80 hours of training (including the 54-hour AFH Administrator course).",
    logic: "This comprehensive training ensures providers understand both clinical care and business operations before taking responsibility for residents.",
    reference: "WAC 388-76-10064"
  },

  // Category 7: Financial & Business Operations (10 questions)
  {
    id: 81,
    category: "Financial & Business Operations",
    question: "What is the definition of 'Financial Solvency' for an AFH?",
    answer: "The ability to meet all financial obligations with money left over for emergencies.",
    logic: "Having 'just enough' to pay bills is not sufficient. DSHS requires a buffer to ensure care isn't compromised if a resident moves out or an emergency occurs.",
    reference: "WAC 388-76-10000"
  },
  {
    id: 82,
    category: "Financial & Business Operations",
    question: "Can DSHS demand to see your personal financial records?",
    answer: "Yes, if there is 'good cause' to believe financial obligations to residents won't be met.",
    logic: "WAC 388-76-10915 gives DSHS the right to access financial records when there's concern about the provider's ability to meet resident care obligations.",
    reference: "WAC 388-76-10915"
  },
  {
    id: 83,
    category: "Financial & Business Operations",
    question: "When must the Disclosure of Charges form be provided?",
    answer: "To any resident/representative prior to or upon admission, and to anyone who asks for it.",
    logic: "This form prevents hidden fees and financial exploitation. It must be provided proactively and upon request to ensure transparency.",
    reference: "WAC 388-76-10540"
  },
  {
    id: 84,
    category: "Financial & Business Operations",
    question: "If a resident moves out early, how is their refund handled?",
    answer: "You must follow the written refund policy disclosed in the admission agreement.",
    logic: "Refund policies must be clearly stated in admission agreements. Providers must follow their own disclosed policies to avoid financial exploitation claims.",
    reference: "RCW 70.128.150"
  },
  {
    id: 85,
    category: "Financial & Business Operations",
    question: "What is 'Break-even' in AFH terms?",
    answer: "When your total revenue matches your total costs plus your owner's draw (desired salary).",
    logic: "Break-even is the point where the business is sustainable. It includes all costs plus the provider's desired compensation, not just covering expenses.",
    reference: "Business Planning"
  },
  {
    id: 86,
    category: "Financial & Business Operations",
    question: "Is the Disclosure of Charges form required for Medicaid residents?",
    answer: "No, it is generally for private-pay residents or those with Medicaid co-pays.",
    logic: "Medicaid residents have rates set by the state, so disclosure forms are primarily for private-pay residents who need to understand all fees.",
    reference: "WAC 388-76-10540"
  },
  {
    id: 87,
    category: "Financial & Business Operations",
    question: "How should you set rates for 'Nurse Delegation'?",
    answer: "These are 'Other Charges' and must be disclosed in the daily/monthly rate or as a separate fee.",
    logic: "Nurse delegation services (medication administration, etc.) are additional services that must be clearly disclosed and priced separately if not included in base rate.",
    reference: "WAC 388-76-10430"
  },
  {
    id: 88,
    category: "Financial & Business Operations",
    question: "Why use 'Psychological Pricing' for a bed?",
    answer: "To make the price appear more attractive (e.g., $199 vs. $200) to potential families.",
    logic: "Psychological pricing strategies can make rates more appealing to families while maintaining profitability. This is a marketing technique, not a compliance requirement.",
    reference: "Pricing Strategies"
  },
  {
    id: 89,
    category: "Financial & Business Operations",
    question: "What happens if you fail to meet financial obligations to your staff?",
    answer: "DSHS may impose remedies, as failure to pay staff endangers resident care.",
    logic: "Staff payment is directly tied to resident care quality. Failure to pay staff can lead to staff leaving, which compromises resident safety and care.",
    reference: "WAC 388-76-10960"
  },
  {
    id: 90,
    category: "Financial & Business Operations",
    question: "Can you use a personal bank account for the AFH?",
    answer: "No. To maintain LLC protection and clear tax records, business and personal finances must be separate (Best Practice).",
    logic: "Separate accounts protect personal assets from business liabilities and ensure clear financial records for DSHS reviews and tax purposes.",
    reference: "Best Practice"
  },

  // Category 8: Operations & Care (10 questions)
  {
    id: 91,
    category: "Operations & Care",
    question: "What is a 'Negotiated Care Plan' (NCP)?",
    answer: "A document developed upon admission detailing resident needs, updated with any status change (WAC 388-76-10375).",
    logic: "The NCP is the 'bible' for care in the home. It must be current and reflect the resident's actual needs to ensure appropriate care delivery.",
    reference: "WAC 388-76-10375"
  },
  {
    id: 92,
    category: "Operations & Care",
    question: "How often must fire/evacuation drills be performed?",
    answer: "Every two months (WAC 388-76-10895).",
    logic: "Regular drills ensure staff and residents know how to respond in emergencies. Documentation of drills is reviewed during inspections.",
    reference: "WAC 388-76-10895"
  },
  {
    id: 93,
    category: "Operations & Care",
    question: "What is the limit for resident capacity in a standard AFH?",
    answer: "Typically up to 6, though some may qualify for 7 or 8 under specific 2023 updates.",
    logic: "Standard capacity is 6 residents. Capacity of 7-8 requires additional safety systems (sprinklers) and approval under RCW 70.128.066.",
    reference: "RCW 70.128.066"
  },
  {
    id: 94,
    category: "Operations & Care",
    question: "What happens if you fail to pay the annual license fee?",
    answer: "DSHS issues a 'Stop Placement' order, preventing new admissions.",
    logic: "License fees fund regulatory oversight. Failure to pay results in enforcement action to protect residents from unregulated operations.",
    reference: "WAC 388-76-10005"
  },
  {
    id: 95,
    category: "Operations & Care",
    question: "What is the required literacy level for an AFH Administrator?",
    answer: "Must be able to read, understand, and implement NCPs in English (WAC 388-76-10130).",
    logic: "Administrators must be able to read and understand care plans, regulations, and resident documentation. This is essential for compliance and care quality.",
    reference: "WAC 388-76-10130"
  },
  {
    id: 96,
    category: "Operations & Care",
    question: "What is 'Professional Liability' insurance?",
    answer: "Coverage specifically for 'Errors and Omissions' in caregiving.",
    logic: "This insurance protects against claims of negligence or mistakes in care delivery. It's separate from general liability and required by WAC 388-76-10192.",
    reference: "WAC 388-76-10192"
  },
  {
    id: 97,
    category: "Operations & Care",
    question: "How long must personnel records be kept?",
    answer: "Per WAC 388-76-10198, records must be available for department review.",
    logic: "Personnel records document staff qualifications and background checks. They must be maintained and available for DSHS review during inspections.",
    reference: "WAC 388-76-10198"
  },
  {
    id: 98,
    category: "Operations & Care",
    question: "If a resident is Medicaid-funded, can the insurance requirement change?",
    answer: "Yes, the Medicaid contract may require higher limits than the WAC minimum (WAC 388-76-10192).",
    logic: "Medicaid contracts can impose additional requirements beyond WAC minimums. Providers must meet the higher of the two standards.",
    reference: "WAC 388-76-10192"
  },
  {
    id: 99,
    category: "Operations & Care",
    question: "What must be in a 'Disaster Plan'?",
    answer: "Procedures for natural disasters, power outages, and medical emergencies.",
    logic: "Disaster plans ensure the home can continue operations during emergencies. They must address various scenarios and be practiced regularly.",
    reference: "WAC 388-76-10805"
  },
  {
    id: 100,
    category: "Operations & Care",
    question: "Why is a Mission Statement important for DSHS?",
    answer: "It defines the 'What' and 'Who' of the business, aligning staff with care goals.",
    logic: "A clear mission statement demonstrates the provider's understanding of their role and helps align all operations with resident-centered care principles.",
    reference: "Best Practice"
  }
];

export const categories = [
  "Legal & Regulatory Framework",
  "Physical Plant & Safety",
  "Bathrooms & Grab Bars",
  "Ramps & Accessibility",
  "Change of Ownership (CHOW)",
  "Application & Licensing",
  "Financial & Business Operations",
  "Operations & Care"
];

