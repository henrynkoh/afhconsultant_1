# Complete Manual - AFH Consultant Masterclass

## Table of Contents

1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Installation & Setup](#installation--setup)
4. [Project Structure](#project-structure)
5. [Curriculum Modules](#curriculum-modules)
6. [Using the Question Bank](#using-the-question-bank)
7. [Resources & Tools](#resources--tools)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Usage](#advanced-usage)

---

## Introduction

The AFH Consultant Masterclass is a comprehensive educational platform designed to train prospective Adult Family Home (AFH) consultants, advisors, and concierges in Washington State. This manual provides complete documentation for using the platform effectively.

### Purpose

This curriculum bridges the gap between basic licensing requirements and high-level business strategy needed to succeed in the Washington State AFH market. It provides:

- **Practical Guidance**: Cookbook-style instructions for compliance
- **Regulatory Mastery**: Complete coverage of WAC, RCW, and DSHS requirements
- **Question Bank**: 100 practice questions with detailed explanations
- **Tools & Checklists**: Ready-to-use resources for client consultations

### Target Audience

- Prospective AFH consultants and advisors
- Existing consultants seeking certification
- AFH operators preparing for inspections
- Training organizations

---

## System Requirements

### Minimum Requirements
- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 500MB free space

### Recommended Requirements
- **Node.js**: Version 20.0 or higher
- **RAM**: 8GB or more
- **Internet**: For accessing external references

---

## Installation & Setup

### Step 1: Verify Node.js Installation

```bash
node --version
# Should show v18.0.0 or higher

npm --version
# Should show 9.0.0 or higher
```

If Node.js is not installed, download from [nodejs.org](https://nodejs.org/)

### Step 2: Navigate to Project Directory

```bash
cd /Users/henryoh/Documents/AFHconsultant_1
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- All required dependencies

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.3s
○ Local: http://localhost:3000
```

### Step 5: Access the Application

Open your browser and navigate to: **http://localhost:3000**

---

## Project Structure

```
AFHconsultant_1/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout with navigation
│   ├── globals.css               # Global styles
│   ├── home-inspection/          # Module 1
│   │   └── page.tsx
│   ├── application-submission/   # Module 2
│   │   └── page.tsx
│   ├── questions/                 # Question bank
│   │   └── page.tsx
│   └── resources/                # Resources & checklists
│       └── page.tsx
├── components/                   # React components
│   └── Navigation.tsx            # Site navigation
├── data/                          # Curriculum data
│   ├── homeInspection.ts         # Module 1 content
│   ├── applicationSubmission.ts  # Module 2 content
│   └── questions.ts              # 100 practice questions
├── public/                        # Static assets (if any)
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts            # Tailwind CSS config
├── next.config.js                 # Next.js config
└── README.md                      # Project overview
```

---

## Curriculum Modules

### Module 1: Home Inspection Compliance

**Location**: `/home-inspection`

**Content**:
- Regulatory Foundation (WAC 51-51-0330, RCW 64.38.060)
- Physical Pre-Inspection Walkthrough
- Change of Ownership (CHOW) & Expansion
- Inspection Process & Checklists

**Key Topics**:
- Window egress requirements (5.7 sq. ft., 44" sill height)
- Grab bar specifications (33-36" height, 250 lb. strength)
- Ramp requirements (1:12 slope, 36" width)
- Fire & life safety (interconnected alarms, extinguishers)
- Water temperature (105-120°F)

**How to Use**:
1. Read each section sequentially
2. Take notes on key measurements and requirements
3. Review the pre-inspection checklist
4. Practice explaining regulations to others

### Module 2: Application Submission

**Location**: `/application-submission`

**Content**:
- BAAU & Legal Framework
- Pre-Submission Preparation
- Web-Based Portal Navigation
- CHOW and Multi-Home Management
- Initial Licensing Interview

**Key Topics**:
- 60-day correction window
- One-year application expiration
- Financial solvency requirements
- 1,000-hour caregiving experience
- Background check protocols
- CEA form requirements

**How to Use**:
1. Study the BAAU process timeline
2. Review required documentation
3. Practice using the application readiness audit
4. Prepare for mock interviews

---

## Using the Question Bank

**Location**: `/questions`

### Features

1. **Category Filtering**: Filter questions by 8 categories:
   - Legal & Regulatory Framework
   - Physical Plant & Safety
   - Bathrooms & Grab Bars
   - Ramps & Accessibility
   - Change of Ownership (CHOW)
   - Application & Licensing
   - Financial & Business Operations
   - Operations & Care

2. **Interactive Study**:
   - Click "Show Answer" to reveal answer, logic, and reference
   - Click "Hide Answer" to test yourself again
   - Questions are numbered for easy tracking

3. **Study Strategy**:
   - Start with "All" to get overview
   - Focus on weak categories
   - Review logic explanations
   - Memorize WAC/RCW references

### Question Format

Each question includes:
- **Question**: The scenario or query
- **Answer**: The correct response
- **Logic**: Why this answer is correct
- **Reference**: WAC/RCW citation

### Recommended Study Plan

**Week 1**: Read all questions (20 per day)
**Week 2**: Study by category (2 categories per day)
**Week 3**: Practice explaining answers
**Week 4**: Review missed questions

---

## Resources & Tools

**Location**: `/resources`

### Available Resources

1. **Pre-Inspection Checklist**
   - Use 72 hours before building inspection
   - Covers all critical compliance items
   - Print and use as physical checklist

2. **Application Readiness Audit**
   - 10-point verification before BAAU submission
   - Prevents common application returns
   - Use with every client

3. **Correction Action Plan Template**
   - Professional response to failed inspections
   - Shows inspector how fixes will be completed
   - Includes timeline and evidence requirements

4. **Client Onboarding Packet**
   - Golden rules of submission
   - Application milestones
   - Timeline expectations

5. **Key Regulatory References**
   - Quick reference to all WAC/RCW sections
   - Organized by topic area
   - Bookmark for quick access

### Using Checklists

1. **Print Checklists**: Keep physical copies for client meetings
2. **Digital Copies**: Save PDFs for email sharing
3. **Customize**: Add client-specific items
4. **Track Progress**: Check off items as completed

---

## Best Practices

### For Learning

1. **Study Daily**: Consistency beats intensity
2. **Take Notes**: Write down key measurements and requirements
3. **Explain Aloud**: Practice explaining regulations to others
4. **Use Checklists**: Don't rely on memory alone
5. **Review Regularly**: Revisit previous modules weekly

### For Consulting

1. **Cite Sources**: Always mention WAC/RCW when explaining
2. **Use Checklists**: Never skip pre-inspection verification
3. **Document Everything**: Keep records of all client interactions
4. **Stay Current**: Regulations change; verify current requirements
5. **Be Professional**: Use correction action plans for failures

### For Client Management

1. **Set Expectations**: Explain timelines clearly
2. **Provide Checklists**: Give clients tools to succeed
3. **Follow Up**: Check on client progress regularly
4. **Document Issues**: Keep records of problems and solutions
5. **Celebrate Success**: Acknowledge when clients pass inspections

---

## Troubleshooting

### Common Issues

#### Issue: "npm install" fails
**Solution**: 
- Update Node.js to latest LTS version
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall

#### Issue: Port 3000 already in use
**Solution**:
- Kill process: `lsof -ti:3000 | xargs kill -9`
- Or use different port: `npm run dev -- -p 3001`

#### Issue: TypeScript errors
**Solution**:
- Run `npm install` to ensure all dependencies are installed
- Check `tsconfig.json` is present
- Restart development server

#### Issue: Styles not loading
**Solution**:
- Verify `tailwind.config.ts` exists
- Check `postcss.config.mjs` is present
- Restart development server

#### Issue: Questions not displaying
**Solution**:
- Check browser console for errors
- Verify `data/questions.ts` file exists
- Clear browser cache

### Getting Help

1. **Check Documentation**: Review this manual first
2. **Review README**: See [README.md](./README.md)
3. **Check Console**: Look for error messages in browser console
4. **Verify Files**: Ensure all files are present in project structure

---

## Advanced Usage

### Customizing Content

To modify curriculum content:

1. **Edit Data Files**: Modify files in `/data` directory
2. **Update Types**: Adjust TypeScript interfaces if needed
3. **Restart Server**: Changes require server restart

### Adding Questions

Edit `/data/questions.ts`:

```typescript
{
  id: 101,
  category: "Your Category",
  question: "Your question?",
  answer: "Your answer",
  logic: "Why this is correct",
  reference: "WAC 388-76-XXXX"
}
```

### Styling Customization

Modify `tailwind.config.ts` to change:
- Colors
- Fonts
- Spacing
- Component styles

### Building for Production

```bash
# Build optimized version
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel deploy
```

---

## Appendix

### Key WAC References

- **WAC 51-51-0330**: Building Code for AFHs
- **WAC 388-76-10005**: License Required
- **WAC 388-76-10075**: Application Process
- **WAC 388-76-10105**: Change of Ownership
- **WAC 388-76-10191**: Liability Insurance
- **WAC 388-76-10192**: Coverage Requirements
- **WAC 388-76-10695**: Physical Environment
- **WAC 388-76-10700**: Building & Fire Safety

### Key RCW References

- **RCW 64.38.060**: HOA Discrimination Prohibition
- **RCW 70.128.120**: Provider Qualifications
- **RCW 70.128.224**: Retroactive Application

### DSHS Forms

- **DSHS 27-222**: Consent to Release Information
- **DSHS 27-223**: Disclosure of Services
- **DSHS 10-417**: Caregiver Experience Attestation
- **DSHS 10-695**: Pre-Inspection Checklist

---

**Last Updated**: 2024
**Version**: 1.0.0

