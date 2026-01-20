# AFH Consultant Masterclass - Complete Curriculum

A comprehensive Next.js educational platform designed to train prospective Adult Family Home (AFH) consultants, advisors, and concierges in Washington State.

## Overview

This curriculum provides detailed, practical, cookbook-style guidance on how to operate AFH businesses in compliance with Washington Administrative Code (WAC) regulations, RCW statutes, and best practices. It bridges the gap between basic licensing requirements and high-level business strategy needed to succeed in the Washington State AFH market.

## Features

### Module 1: Home Inspection Compliance
- Master WAC 51-51-0330, 388-76-10105/10695/10700, and RCW 64.38.060
- Physical plant requirements and egress standards
- Fire and life safety compliance
- Change of Ownership (CHOW) protocols
- Pre-inspection checklists

### Module 2: Application Submission
- Navigate WAC 388-76-10005/10075/10700/10106/10035-37
- DSHS 27-222-3 forms and RCW 70.128.120 requirements
- BAAU submission process
- Financial solvency requirements
- Caregiving experience attestation
- Application readiness audits

### Top 100 Practice Questions
- Comprehensive question bank organized by category
- Detailed answers with logical explanations
- WAC/RCW references for each question
- Interactive study interface with category filtering

### Resources & Checklists
- Pre-inspection checklists
- Application readiness audits
- Correction action plan templates
- Client onboarding packets
- Key regulatory references

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
AFHconsultant_1/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── home-inspection/   # Module 1 pages
│   ├── application-submission/ # Module 2 pages
│   ├── questions/         # Question bank interface
│   └── resources/         # Resources and checklists
├── data/                   # Curriculum data
│   ├── homeInspection.ts   # Home inspection curriculum
│   ├── applicationSubmission.ts # Application curriculum
│   └── questions.ts       # 100 practice questions
└── public/                 # Static assets
```

## Curriculum Content

### Regulatory Frameworks Covered
- **WAC 51-51-0330**: Building Code for AFHs
- **WAC 388-76**: DSHS Licensing Requirements
- **RCW 64.38.060**: HOA Discrimination Protection
- **RCW 70.128.120**: Provider Qualifications
- **DSHS Forms**: 27-222, 27-223, 10-417, 10-695

### Key Topics
- Financial Solvency Requirements
- Caregiving Experience Attestation (1,000 hours)
- Background Check Protocols
- Building Inspection Compliance
- Change of Ownership (CHOW)
- Insurance Requirements ($500k/$1M)
- Physical Plant Standards
- Fire & Life Safety
- Accessibility Requirements

## Learning Objectives

Upon completion, consultants will be able to:
- ✓ Master the regulatory framework (WAC, RCW, DSHS forms)
- ✓ Understand logical reasoning behind compliance requirements
- ✓ Develop practical consulting skills for client guidance
- ✓ Prepare for AFH Administrator Training certification
- ✓ Answer questions based on evidence, not opinion

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React**: UI library

## License

This project is designed for educational purposes to train AFH consultants in Washington State.

## Support

For questions about the curriculum content or technical issues, please refer to the Washington State DSHS website or contact your local ALTSA office.

