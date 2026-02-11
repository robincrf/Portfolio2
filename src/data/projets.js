export const projetsData = {
  projet1: {
    title: "Intelligent Cardiac Anomaly Detection (C++)",
    technologies: {
      "C++17": "High-performance real-time implementation",
      Eigen: "Linear algebra (filters, convolutions, features)",
      "FFTW3": "Fourier transforms for frequency analysis",
      OpenMP: "Parallelization of preprocessing and feature extraction",
      "ONNX Runtime / libtorch": "AI model inference (classification)",
      Qt: "Signal and prediction visualization interface"
    },
    description:
      "🔍 Definition: on an ECG signal, each heartbeat generates a wave called the QRS complex, which represents the electrical activity of the ventricles during contraction. The R peak corresponds to the highest point of this complex, i.e. the maximum positive amplitude of the beat. It indicates the exact moment when the heart contracts to pump blood into the arteries. It is the main reference used to measure heart rate (in beats per minute). The time between two successive R peaks corresponds to the RR interval. It is also used to detect heart rhythm anomalies such as: arrhythmias, tachycardias, or fibrillations.",
    context: "Academic / R&D project — AI & healthcare",
    objectives: [
      "Bandpass filtering, background noise and baseline removal",
      "Near real-time R peak detection (windowing + derivation + integration)",
      "Temporal and frequency feature extraction (RR, HRV, QRS energy)",
      "AI model for rhythm classification (ONNX/libtorch) with metrics (accuracy, recall, F1)",
      "Visualization: ECG trace + R peak and prediction markers"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/ECG_cpp.png`,
      `${process.env.PUBLIC_URL}/image/ecg_prediction.png`
    ]
  },
  projet2: {
    title: "ASCON-256 Cryptographic Algorithm Implementation (VHDL)",
    technologies: {
      SystemVerilog: "Hardware description language for encryption simulation",
      ASCON: "Lightweight cryptographic algorithm selected for the NIST 2023 standard",
    },
    description:
      "Full implementation of ASCON-256 encryption with 12 internal permutations, round constant addition, non-linear substitution operations (S-box), linear diffusion, and hardware behavior simulation in VHDL. The goal of the project was to understand the internal structure of a modern cryptographic algorithm and validate its operation through simulation.",
    context: "University project — hardware cryptography",
    objectives: [
      "Implement the ASCON-256 permutation (12 rounds)",
      "Carry out the steps: constant addition, substitution (S-box), and linear diffusion",
      "Create the testbench to validate output and logical timing",
      "Simulate and observe internal transitions via ModelSim",
      "Optimize logic resources and propagation time"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/ascon_pr.png`,
      `${process.env.PUBLIC_URL}/image/fsm_ascon.png`
    ]
  },
  projet3: {
    title: "Automated Data Quality Pipeline (Decathlon)",
    technologies: {
      Python: "Main language for orchestration and rule definition",
      "Great Expectations": "Data validation against 7 quality standards",
      Pandas: "File loading, profiling, and transformations",
      "SMTP (email)": "Automatic notification of deviations and reports",
      GitHub: "CI/CD and repository version tracking"
    },
    description:
      "Implementation of an automated data quality control pipeline for large Decathlon data files. Rules are defined with Great Expectations and cover 7 data quality dimensions. On each run, a report is generated and sent via email (SMTP) with metrics, failed tests, and recommendations.",
    context: "Personal project — data engineering & data governance",
    objectives: [
      "Cover the 7 data quality standards: completeness, accuracy, validity, uniqueness, consistency, referential integrity, freshness",
      "Define an expectations catalog: schema, types, bounds, regex, primary keys/duplicates, reference data",
      "Automatically generate an HTML/JSON report (Great Expectations Data Docs)",
      "Send email notifications (SMTP) on failure with attachments (report + error sample)",
      "Scheduled orchestration (cron) and incident recovery",
      "Traceability: logs, metrics, and execution history"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/mail_dq.png`
    ]
  },
  projet4: {
    title: "Modern Portfolio",
    technologies: {
      React: "Library for dynamic and declarative interfaces",
      TypeScript: "Static typing for reliability and maintainability",
      "Framer Motion": "Smooth and accessible animations",
      "React Router": "Declarative multi-page navigation",
      CSS3: "Responsive styles (grid/flex) and CSS variables",
      Github: "Development and hosting platform"
    },
    description:
      "A modern portfolio built with React + TypeScript, based on reusable component logic. Project data comes from a local 'API' (dedicated file) to separate presentation and content. The site showcases my professional journey, achievements, and skills.",
    context: "Personal project — professional showcase",
    objectives: [
      "Modular architecture with reusable components",
      "Centralized and typed data source (API file)",
      "Web performance (Lighthouse 95+)",
      "Accessibility (keyboard navigation, aria, contrasts)",
      "Responsive design",
      "Continuous deployment via Github"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/projet1/screen1.png`,
      `${process.env.PUBLIC_URL}/image/projet1/screen2.png`
    ]
  },
  projet5: {
    title: "RAG-based Strategic Intelligence System (KPMG)",
    technologies: {
      Python: "RAG pipeline orchestration and data ingestion",
      LangChain: "Framework for component chaining (Embeddings, Pinecone, LLM)",
      Pinecone: "Serverless vector database (isolated namespaces)",
      "Mistral AI": "Language model (Mistral Medium) and Embeddings (1024 dim)",
      "yfinance / NewsAPI": "Real-time financial data and news feeds",
      Gradio: "Interactive demo interface for analysts"
    },
    description:
      "🔍 Design of a RAG (Retrieval-Augmented Generation) system to automate competitive intelligence for the KPMG Global Strategy Group. The system ingests financial reports (SEC 10-K), news, and market data, indexes them in Pinecone with namespace isolation, and uses Mistral Medium to generate sourced and reliable analyses. The goal is to reduce analyst research time by 60% while ensuring information traceability (mandatory citations).",
    context: "KPMG Hackathon — 1st Prize (Innovation & Strategy)",
    objectives: [
      "Multi-source ingestion pipeline: SEC EDGAR, NewsAPI, yfinance, PDFs",
      "Advanced RAG architecture: adaptive chunking, Mistral Embeddings, hybrid retriever",
      "Rigorous fact-checking: prompt engineering enforcing citations (Source | Reliability | Date)",
      "Analyst interface: chatbot capable of cross-namespace data comparison (e.g. News vs Finance)",
      "Scalable architecture: Pinecone Serverless + LangChain LCEL"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/interface.png`,
      `${process.env.PUBLIC_URL}/image/segment.png`,
      `${process.env.PUBLIC_URL}/image/chatbot.png`
    ]
  }
};
