import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IrisSoftwareInterface } from '../components/IrisSoftwareInterface';
import { ExactIrisPoster } from '../components/ExactIrisPoster';
import { TextMask } from '../components/TextMask';
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Mic,
  Eye,
  Cpu,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Server,
  User,
  Volume2,
  CheckCircle2,
  Clock,
  Compass,
  Zap,
  Shield,
  Layers3,
  Sliders,
  Github,
  Linkedin,
} from 'lucide-react';

interface ArchNode {
  id: string;
  name: string;
  stage: string;
  status: 'IMPLEMENTED' | 'IN DEVELOPMENT' | 'EXPLORING' | 'PLANNED';
  icon: React.ElementType;
  role: string;
  techDetails: string;
  latencyExpectation: string;
}

export const IrisCaseStudyPage: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('routing');

  const scrollToArchitecture = () => {
    const el = document.getElementById('architecture-visual');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const architectureLayers = [
    {
      number: '01',
      title: 'Voice Interaction',
      subtitle: 'Natural Language Understanding & Neural Speech-to-Text',
      desc: 'Bidirectional acoustic dialogue cadence designed to minimize latency. Explores OpenAI Whisper for acoustic transcription paired with an ultra-low latency text-to-speech stream to maintain natural conversation cadence.',
      protocols: 'Streaming VAD, WebRTC audio buffers, Whisper base.en',
      status: 'IN DEVELOPMENT',
      latency: '~150–250ms VAD threshold',
    },
    {
      number: '02',
      title: 'AI Model Orchestration',
      subtitle: 'Dynamic Task Planning & Intent Routing',
      desc: 'Task-dependent model routing balancing compact on-device local models with frontier multimodal cloud APIs (Gemini). Immediate syntactic commands are resolved locally, while high-dimensional reasoning is dispatched externally.',
      protocols: 'Intent classifier, token budget balancer, fallback circuit breaker',
      status: 'IN DEVELOPMENT',
      latency: '~50–100ms routing overhead',
    },
    {
      number: '03',
      title: 'Screen Understanding',
      subtitle: 'Computer Vision (OCR / Object Detection / Visual Context)',
      desc: 'Visual reasoning over visible desktop content. Rather than relying on fragile OCR, Iris ingests desktop display frames into Gemini’s visual API to inspect active IDE code lines, terminal error logs, or browser documents.',
      protocols: 'OS screen buffer grabbing, diff frame compression, Gemini Multimodal Vision API',
      status: 'IN DEVELOPMENT',
      latency: '~400–800ms visual inference',
    },
    {
      number: '04',
      title: 'Desktop Automation',
      subtitle: 'Action Execution, Workflow Scripts & Process Control',
      desc: 'Carrying out authorized computer tasks—launching developer apps, navigating websites, and adjusting system preferences. Every desktop action requires explicit user authorization and operates under strict sandboxing.',
      protocols: 'Native OS execution bridge, IPC sockets, mandatory confirmation prompts',
      status: 'EXPLORING',
      latency: 'Interactive user verification required',
    },
    {
      number: '05',
      title: 'Visual Perception',
      subtitle: 'Real-time Camera Perception & Spatial Attention',
      desc: 'Future investigation into webcam-based spatial awareness and user presence detection for hands-free, natural computing. This capability is in exploratory design.',
      protocols: 'Webcam feed buffer, on-device face/gaze detection',
      status: 'PLANNED',
      latency: 'Exploratory architecture',
    },
    {
      number: '06',
      title: 'Local AI Inference',
      subtitle: 'Neural Network Edge Execution (CPU / GPU / NPU)',
      desc: 'Exploration of compact quantized models for responsive, low-latency, privacy-oriented processing directly on consumer laptops, reducing external API dependencies.',
      protocols: 'ONNX Runtime, Ollama / llama.cpp local bindings, 4-bit quantization',
      status: 'EXPLORING',
      latency: '~30–60 tokens/sec on modern silicon',
    },
  ];

  const nodes: ArchNode[] = [
    {
      id: 'input',
      name: 'User Input Stream',
      stage: '01 / CAPTURE',
      status: 'IMPLEMENTED',
      icon: User,
      role: 'Captures continuous voice audio, hotkey shortcuts, or text queries from the desktop operator.',
      techDetails: 'Native audio capture buffer, OS keyboard event hooks, system-level hotkey bindings.',
      latencyExpectation: '< 10ms acquisition',
    },
    {
      id: 'audio',
      name: 'Speech & Acoustic Processing',
      stage: '02 / TRANSCRIBE',
      status: 'IN DEVELOPMENT',
      icon: Mic,
      role: 'Converts raw audio bytes into text tokens while computing voice activity detection (VAD).',
      techDetails: 'Whisper integration, streaming VAD chunking, volume normalization.',
      latencyExpectation: '~150 - 300ms',
    },
    {
      id: 'vision',
      name: 'Desktop Visual Buffer',
      stage: 'FEED / SENSORY',
      status: 'IN DEVELOPMENT',
      icon: Eye,
      role: 'Captures active desktop display frames to ground model reasoning in the user’s exact visual context.',
      techDetails: 'Gemini Multimodal API, OS screen buffer grab, downsampled frame transmission, diff analysis.',
      latencyExpectation: '~400 - 800ms',
    },
    {
      id: 'routing',
      name: 'Task Understanding & Routing',
      stage: '03 / ORCHESTRATION',
      status: 'IN DEVELOPMENT',
      icon: Cpu,
      role: 'Analyzes user intent complexity, decides whether local inference or cloud API is optimal, and prepares tools.',
      techDetails: 'Syntactic intent classifier, token budget balancer, tool parameter validator.',
      latencyExpectation: '~50 - 100ms',
    },
    {
      id: 'model',
      name: 'Hybrid Inference Engine',
      stage: '04 / REASONING',
      status: 'IN DEVELOPMENT',
      icon: Server,
      role: 'Executes reasoning using local compact SLMs for rapid replies or frontier cloud models for deep analysis.',
      techDetails: 'Local ONNX/Ollama runner for lightweight tasks; Gemini API for deep multimodal reasoning.',
      latencyExpectation: '~300 - 1200ms',
    },
    {
      id: 'synthesis',
      name: 'Voice Synthesis (TTS)',
      stage: '05A / OUTPUT',
      status: 'IN DEVELOPMENT',
      icon: Volume2,
      role: 'Streams synthesized vocal response directly to desktop speakers or headphones.',
      techDetails: 'Low-latency neural TTS streaming chunk-by-chunk for immediate acoustic feedback.',
      latencyExpectation: '~120ms first-chunk playback',
    },
    {
      id: 'tool_execution',
      name: 'Computer Control & Tools',
      stage: '05B / ACTION',
      status: 'EXPLORING',
      icon: Terminal,
      role: 'Carries out approved desktop system actions: launching software, navigating windows, managing preferences.',
      techDetails: 'Controlled OS execution bridge with mandatory confirmation modal; sandboxed permission model.',
      latencyExpectation: 'Interactive confirmation required',
    },
  ];

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[3];

  const capabilities = [
    {
      name: 'Voice Interaction',
      category: 'AUDIO INTERFACE',
      status: 'IN DEVELOPMENT',
      desc: 'Bidirectional conversational speech input and low-latency acoustic response generation using Whisper and streaming neural TTS.',
    },
    {
      name: 'AI Model Integration',
      category: 'COGNITIVE ENGINE',
      status: 'IN DEVELOPMENT',
      desc: 'Orchestrating frontier cloud reasoning APIs (Gemini) with task-specific prompts and structured tool calling.',
    },
    {
      name: 'Screen Context & Understanding',
      category: 'MULTIMODAL SENSING',
      status: 'IN DEVELOPMENT',
      desc: 'Ingesting live desktop display frames to visually analyze active code editors, browser tabs, and application errors.',
    },
    {
      name: 'Desktop Operating Controls',
      category: 'SYSTEM AUTOMATION',
      status: 'EXPLORING',
      desc: 'Safely opening applications, navigating websites, and modifying system preferences under strict user verification.',
    },
    {
      name: 'Local Model Execution',
      category: 'EDGE RUNTIME',
      status: 'EXPLORING',
      desc: 'Running compact local SLMs on consumer hardware to preserve offline speed and reduce external API latency.',
    },
    {
      name: 'Camera-Based Visual Perception',
      category: 'PHYSICAL CONTEXT',
      status: 'PLANNED',
      desc: 'Future investigation into webcam-based spatial awareness and user attention detection for hands-free computing.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] pt-32 pb-28 selection:bg-cyan-950 selection:text-cyan-200">
      {/* Celestial Cyan Ambient Aura */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-28">
        {/* =========================================================================
            SECTION 1 — CINEMATIC INTRODUCTION
        ========================================================================= */}
        <section className="space-y-6 max-w-4xl border-b border-white/[0.08] pb-14">
          {/* Breadcrumb & Identifier */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94a3b8]">
            <Link
              to="/projects"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Projects</span>
            </Link>
            <span className="text-[#475569]">/</span>
            <span className="text-cyan-400 tracking-[0.25em] uppercase font-semibold">
              OSCORP / PROJECT 001
            </span>
          </div>

          <div className="space-y-4">
            <TextMask
              as="h1"
              lines={["IRIS // v4.0", "Intelligent Desktop Assistant"]}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            />

            <div className="text-xl sm:text-2xl text-cyan-300 font-medium tracking-tight">
              An intelligent assistant for your desktop.
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#A1A19C] leading-relaxed max-w-3xl font-normal">
            IRIS explores a more natural way to interact with a computer, combining
            conversational interfaces, AI model integrations, contextual understanding,
            and desktop automation in one evolving software project.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToArchitecture}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#050505] bg-cyan-400 hover:bg-cyan-300 transition-all rounded-sm shadow-[0_0_25px_rgba(34,211,238,0.3)] cursor-pointer hover:scale-[1.02]"
            >
              <span>Explore the architecture</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase text-[#F2F2F0] bg-[#0c1218] border border-cyan-900/40 hover:border-cyan-500/50 hover:bg-[#111922] transition-all rounded-sm"
            >
              <span>Back to projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-[#64748b]">
            <span className="inline-flex items-center gap-2 text-cyan-400">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>ACTIVE DEVELOPMENT</span>
            </span>
            <span>·</span>
            <span>DESKTOP RUNTIME</span>
            <span>·</span>
            <span>HYBRID INFERENCE PIPELINE</span>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2 — THE PRODUCT IN CONTEXT
        ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase block">
              01 // THE PROBLEM IN CONTEXT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Moving beyond disconnected AI tools.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#A1A19C] leading-relaxed">
            <p>
              IRIS is an evolving desktop assistant designed to make computer
              interaction more conversational and context-aware. Instead of treating
              voice, visual context, AI reasoning, and computer controls as disconnected
              tools, the project explores how they could work together through a unified
              assistant.
            </p>
            <p>
              Traditional AI models live isolated inside browser tabs, completely blind
              to the developer’s active workspace. IRIS investigates what happens when
              reasoning is directly grounded in continuous screen perception and spoken
              dialogue, turning passive question answering into active desktop execution.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3 — INTERACTIVE INTERFACE SHOWCASE (Native Rebuilt Controller)
        ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cyan-950/60 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase block">
                02 // LIVE APPLICATION EMULATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">
                Interactive IRIS Interface Showcase
              </h2>
            </div>
            <div className="text-xs font-mono text-[#64748b]">
              TAP THE CENTRAL CORE ORB TO TOGGLE ACTIVE SPEECH RECOGNITION
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-3xl leading-relaxed">
            Recreated natively from verified production screenshots of the IRIS v4.0 desktop client.
            Observe the active voice pipeline, screen share hooks, real-time system clock,
            and dynamic acoustic waveform meters.
          </p>

          <div className="pt-4">
            <IrisSoftwareInterface />
          </div>
        </section>

        {/* =========================================================================
            SECTION 4 — SOFTWARE ARCHITECTURE (Layer Scrubber & 3D Diagram Visual)
        ========================================================================= */}
        <section id="architecture-visual" className="space-y-10 scroll-mt-28">
          <div className="border-b border-cyan-950/60 pb-6">
            <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase block">
              03 // PRODUCT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-1">
              Software Architecture Concept
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-2 max-w-2xl leading-relaxed">
              One interface. Multiple layers of intelligence. A layered isometric view
              illustrating the computational flow across desktop hardware and cloud models.
            </p>
          </div>

          {/* Featured Architecture Visual Image Asset */}
          <div className="relative rounded-xl overflow-hidden border border-cyan-950/70 bg-[#040608] shadow-[0_25px_80px_rgba(0,0,0,0.95)] group">
            <img
              src="/assets/iris_architecture.jpg"
              alt="IRIS Intelligent Desktop Assistant - Layered 3D Software Architecture Concept Diagram"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-xl" />
          </div>

          {/* Interactive Layer Scrubber & Detail Inspector */}
          <div className="p-8 sm:p-10 bg-[#080c10] border border-cyan-950/60 rounded-sm space-y-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-950/60 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono tracking-widest text-white uppercase font-semibold">
                  INTERACTIVE LAYER SCRUBBER (SELECT LAYER TO INSPECT)
                </span>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                LAYER {architectureLayers[selectedLayer].number} OF 06
              </span>
            </div>

            {/* Layer Selection Tab Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {architectureLayers.map((layer, idx) => (
                <button
                  key={layer.number}
                  type="button"
                  onClick={() => setSelectedLayer(idx)}
                  className={`p-3 text-left border rounded transition-all font-mono text-xs cursor-pointer ${
                    selectedLayer === idx
                      ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                      : 'bg-[#040608] border-cyan-950/50 text-[#64748b] hover:text-white hover:border-cyan-800/40'
                  }`}
                >
                  <span className="block text-[10px] text-cyan-400/80 mb-0.5">
                    LAYER {layer.number}
                  </span>
                  <span className="font-semibold block truncate">
                    {layer.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Deep Layer Specification Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 border-t border-cyan-950/40">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    LAYER {architectureLayers[selectedLayer].number}
                  </span>
                  <span className="text-[#475569]">·</span>
                  <span className="text-xs font-mono text-[#cbd5e1]">
                    {architectureLayers[selectedLayer].subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {architectureLayers[selectedLayer].title}
                </h3>
                <p className="text-sm text-[#A1A19C] leading-relaxed">
                  {architectureLayers[selectedLayer].desc}
                </p>
              </div>

              <div className="lg:col-span-5 p-5 bg-[#040608] border border-cyan-950/60 rounded-sm space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[#64748b] text-[10px] uppercase block mb-1">
                    PROTOCOLS &amp; RUNTIME
                  </span>
                  <p className="text-[#cbd5e1] text-[11px] leading-relaxed">
                    {architectureLayers[selectedLayer].protocols}
                  </p>
                </div>
                <div className="pt-2 border-t border-cyan-950/40 flex items-center justify-between text-[11px]">
                  <span className="text-[#64748b]">STATUS:</span>
                  <span className="text-cyan-300 font-semibold">
                    {architectureLayers[selectedLayer].status}
                  </span>
                </div>
                <div className="pt-1 flex items-center justify-between text-[11px]">
                  <span className="text-[#64748b]">LATENCY:</span>
                  <span className="text-white">
                    {architectureLayers[selectedLayer].latency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5 — HOW THE SYSTEM WORKS (Unboxed Flow Diagram)
        ========================================================================= */}
        <section className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cyan-950/60 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase block">
                04 // CONCEPTUAL PIPELINE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">
                How the System Works
              </h2>
            </div>
            <div className="text-xs font-mono text-[#64748b]">
              USER INPUT → INPUT PROCESSING → TASK ROUTING → AI REASONING → ACTION
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Nodes */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`text-left p-4 border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                      isSelected
                        ? 'bg-[#0f172a] border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.15)] text-white'
                        : 'bg-[#080c10] border-cyan-950/40 hover:border-cyan-800/40 text-[#94a3b8]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-[#64748b]">
                        {node.stage}
                      </span>
                      <span className="text-[9px] text-cyan-400">
                        {node.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-[#64748b]'}`} />
                      <span className="font-semibold">{node.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Node Detail */}
            <div className="lg:col-span-5 p-6 bg-[#080c10] border border-cyan-900/40 rounded-sm space-y-4 font-mono text-xs sticky top-28 shadow-xl">
              <div className="flex items-center justify-between border-b border-cyan-950/60 pb-3">
                <div>
                  <span className="text-[10px] text-cyan-400 block">
                    {selectedNode.stage}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {selectedNode.name}
                  </h3>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  {selectedNode.status}
                </span>
              </div>

              <div>
                <span className="text-[#64748b] text-[10px] uppercase block mb-1">
                  ROLE IN PIPELINE
                </span>
                <p className="text-[#cbd5e1] font-sans text-xs leading-relaxed">
                  {selectedNode.role}
                </p>
              </div>

              <div className="pt-2 border-t border-cyan-950/40">
                <span className="text-[#64748b] text-[10px] uppercase block mb-1">
                  UNDERLYING PROTOCOLS
                </span>
                <p className="text-[#94a3b8] text-[11px] leading-relaxed">
                  {selectedNode.techDetails}
                </p>
              </div>

              <div className="pt-2 border-t border-cyan-950/40 flex items-center justify-between text-[11px]">
                <span className="text-[#64748b] uppercase">LATENCY BUDGET</span>
                <span className="text-cyan-300 font-semibold">
                  {selectedNode.latencyExpectation}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6 — CAPABILITIES & STATUS AUDIT (Unboxed Status List)
        ========================================================================= */}
        <section className="space-y-8">
          <div className="border-b border-cyan-950/60 pb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase block">
              05 // STATUS AUDIT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">
              Verified Capabilities &amp; Development Status
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1">
              Distinguishing verified working components from experimental roadmap tracks.
            </p>
          </div>

          <div className="divide-y divide-cyan-950/60 border-t border-b border-cyan-950/60">
            {capabilities.map((c) => (
              <div
                key={c.name}
                className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline"
              >
                <div className="sm:col-span-3">
                  <span className="text-[10px] font-mono text-[#64748b] uppercase block">
                    {c.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {c.name}
                  </h3>
                </div>

                <div className="sm:col-span-7 text-xs text-[#94a3b8] font-sans leading-relaxed">
                  {c.desc}
                </div>

                <div className="sm:col-span-2 sm:text-right">
                  <span className={`inline-block font-mono text-[10px] px-2.5 py-1 rounded border ${
                    c.status === 'IMPLEMENTED'
                      ? 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40'
                      : c.status === 'IN DEVELOPMENT'
                      ? 'text-white bg-slate-900 border-white/20'
                      : 'text-[#64748b] bg-slate-950 border-white/10'
                  }`}>
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7 — OFFICIAL IRIS POSTER
        ========================================================================= */}
        <section className="space-y-8 pt-6 border-t border-cyan-950/40">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase block">
                06 // OFFICIAL PROJECT POSTER
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                Official IRIS Poster — &quot;Your Life. Simplified. With IRIS.&quot;
              </h2>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                Official project visual communicating the human outcome of IRIS: your AI companion for voice commands, PC control, Gmail automation, and task execution.
              </p>
            </div>

            <div className="text-xs font-mono text-[#64748b]">
              MORE THAN JUST AN ASSISTANT · SMARTER TOGETHER
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Replaced Official Poster Artwork Asset */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-cyan-950/80 shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-[#040608] group">
                <img
                  src="/assets/iris_poster.jpg"
                  alt="Official IRIS Promotional Poster - Your Life Simplified With IRIS"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>
              <span className="mt-3 text-[11px] font-mono text-[#64748b]">
                [ Official Project Poster Asset · 2:3 Vertical Format ]
              </span>
            </div>

            {/* Right: Interactive High-Fidelity Vector Poster Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2 border-b border-cyan-950/60 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  DIGITAL INTERACTION BREAKDOWN
                </span>
                <h3 className="text-xl font-bold text-white">
                  &quot;Just Talk.&quot; — The Complete Human Experience
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  While the 3D architecture diagram maps the underlying engineering layers,
                  the official poster articulates what IRIS delivers to the everyday user:
                  frictionless hands-free computing, proactive assistance, and a friendly desktop companion.
                </p>
              </div>

              {/* Exact Poster Render Component */}
              <div className="pt-2">
                <ExactIrisPoster />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8 — CLOSING & FOUNDER REFLECTION
        ========================================================================= */}
        <section className="pt-12 border-t border-cyan-950/40 space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase">
              ACTIVE ENGINEERING
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Still building. Still exploring.
            </h2>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-2xl mx-auto">
              IRIS is an ongoing engineering initiative focused on exploring more
              natural, context-aware interactions between people and their computers.
            </p>
          </div>

          {/* First-person reflection card from Aditya Mittal */}
          <div className="p-8 bg-[#080d14] border border-cyan-950/70 rounded-sm space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block">
              FROM THE BUILDER // ADITYA MITTAL
            </span>
            <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed italic font-serif">
              &quot;I designed Iris because I wanted an assistant that didn&apos;t just spit out prompt tokens into a chatbot window, but actually understood what was open in my IDE and could execute commands without friction. Every layer in this architecture is something we measure, test, and iterate directly on real machines.&quot;
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://github.com/adityamittal0786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aditya Mittal on GitHub"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Explore IRIS code on GitHub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-[#334155]">·</span>

              <a
                href="https://www.linkedin.com/in/adityamittal2006/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aditya Mittal on LinkedIn"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect with Aditya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#050505] bg-cyan-400 hover:bg-cyan-300 transition-colors rounded-sm shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              <span>Explore more projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-[0.2em] uppercase text-white bg-[#080c10] border border-cyan-900/40 hover:border-cyan-500/50 transition-colors rounded-sm"
            >
              <span>Inquire about IRIS</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
