# **Project Installation Log: mktix**

## **1\. Initial Next.js Setup**

**Date:** March 31, 2026

**Command:** npx create-next-app@latest . \--ts \--app \--eslint

**Location:** C:\\Users\\aeg21\\Downloads\\mktix

### **Configuration Choices**

| Prompt | Selection | Reason |
| :---- | :---- | :---- |
| **React Compiler** | **No** | Avoid experimental features for legacy stability. |
| **Tailwind CSS** | **No** | Opted out of v4 to manually install v3.4 for older browsers. |
| **src/ directory** | **No** | Using root app/ directory structure. |
| **Import Alias** | **No** | Using default @/\*. |
| **AGENTS.md** | **No** | Kept root directory clean of AI guidance files. |

### **Version Metadata**

* **create-next-app:** v16.2.1  
* **npm version used:** 11.6.1  
* **Primary Dependencies:** next, react, react-dom, typescript

---

## **2\. Post-Installation Tasks (Pending)**

### **🔳 Install Legacy-Friendly Tailwind (v3.4)**

Since Tailwind was skipped during the initial setup, run the following to support older browsers:

Bash  
npm install \-D tailwindcss@3.4 postcss autoprefixer  
npx tailwindcss init \-p

### **🔳 Update Global CSS**

Ensure app/globals.css contains the v3 directives:

CSS  
@tailwind base;  
@tailwind components;  
@tailwind utilities;

---

## **3\. Environment Notes**

* **Node.js Environment:** (Add your node \-v here)  
* **OS:** Windows (C:\\Users\\aeg21...)  
* **Git:** Initialized automatically by installer.

