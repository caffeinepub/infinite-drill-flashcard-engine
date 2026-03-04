// ─── IIT JEE Syllabus Data ────────────────────────────────────────────────────

export interface IITFormula {
  name: string;
  formula: string;
}

export interface IITTopic {
  id: string;
  name: string;
  description: string;
  keyConcepts: { title: string; description: string }[];
  importantFormulas: IITFormula[];
  videoKeyword?: string;
}

export interface IITUnit {
  id: string;
  number: number;
  name: string;
  topics: IITTopic[];
}

export interface IITSubject {
  name: string;
  icon: string;
  color: string;
  description: string;
  units: IITUnit[];
}

// ─── Physics ──────────────────────────────────────────────────────────────────

const physicsSubject: IITSubject = {
  name: "Physics",
  icon: "⚛️",
  color: "neon-blue",
  description:
    "Mechanics, Thermodynamics, Electromagnetism, Optics, Modern Physics",
  units: [
    {
      id: "phy-unit-1",
      number: 1,
      name: "Mechanics",
      topics: [
        {
          id: "phy-kinematics",
          name: "Kinematics",
          description:
            "Study of motion without considering its cause. Covers displacement, velocity, acceleration, and equations of motion for uniform and non-uniform motion in 1D, 2D, and 3D.",
          keyConcepts: [
            {
              title: "Equations of Motion",
              description:
                "v = u + at, s = ut + ½at², v² = u² + 2as for uniform acceleration",
            },
            {
              title: "Projectile Motion",
              description:
                "Combination of horizontal uniform motion and vertical uniformly accelerated motion",
            },
            {
              title: "Relative Motion",
              description:
                "Motion of one object with respect to another; river-boat and rain-man problems",
            },
            {
              title: "Circular Motion",
              description:
                "Centripetal acceleration a = v²/r = ω²r for uniform circular motion",
            },
          ],
          importantFormulas: [
            { name: "First equation of motion", formula: "v = u + at" },
            { name: "Second equation of motion", formula: "s = ut + ½at²" },
            { name: "Third equation of motion", formula: "v² = u² + 2as" },
            { name: "Range of projectile", formula: "R = u²sin2θ / g" },
            { name: "Centripetal acceleration", formula: "a = v²/r" },
          ],
          videoKeyword: "kinematics",
        },
        {
          id: "phy-laws-motion",
          name: "Laws of Motion",
          description:
            "Newton's three laws of motion form the foundation of classical mechanics. Covers free body diagrams, friction, tension, and pseudo forces in non-inertial frames.",
          keyConcepts: [
            {
              title: "Newton's First Law",
              description:
                "A body remains at rest or in uniform motion unless acted upon by an external net force (Inertia)",
            },
            {
              title: "Newton's Second Law",
              description:
                "Net force equals rate of change of momentum: F = ma",
            },
            {
              title: "Newton's Third Law",
              description: "Every action has an equal and opposite reaction",
            },
            {
              title: "Friction",
              description:
                "Static friction fs ≤ μsN; Kinetic friction fk = μkN",
            },
          ],
          importantFormulas: [
            { name: "Newton's Second Law", formula: "F = ma" },
            { name: "Momentum", formula: "p = mv" },
            { name: "Impulse", formula: "J = F·Δt = Δp" },
            { name: "Friction force", formula: "f = μN" },
          ],
          videoKeyword: "newton",
        },
        {
          id: "phy-work-energy",
          name: "Work, Energy and Power",
          description:
            "Energy conservation, work-energy theorem, and power. Covers potential energy, kinetic energy, elastic and inelastic collisions.",
          keyConcepts: [
            {
              title: "Work-Energy Theorem",
              description:
                "Net work done on a body equals change in its kinetic energy",
            },
            {
              title: "Conservation of Energy",
              description:
                "Total mechanical energy remains constant in absence of non-conservative forces",
            },
            {
              title: "Elastic Collision",
              description: "Both momentum and kinetic energy are conserved",
            },
            {
              title: "Inelastic Collision",
              description: "Only momentum is conserved; kinetic energy is lost",
            },
          ],
          importantFormulas: [
            { name: "Kinetic Energy", formula: "KE = ½mv²" },
            { name: "Potential Energy (gravity)", formula: "PE = mgh" },
            { name: "Work", formula: "W = F·d·cosθ" },
            { name: "Power", formula: "P = W/t = F·v" },
          ],
          videoKeyword: "work energy",
        },
        {
          id: "phy-rotation",
          name: "Rotational Motion",
          description:
            "Angular kinematics, torque, moment of inertia, angular momentum. Covers rolling motion and parallel axis theorem.",
          keyConcepts: [
            {
              title: "Torque",
              description: "Rotational analogue of force: τ = r × F = Iα",
            },
            {
              title: "Moment of Inertia",
              description: "Rotational inertia of a body: I = Σmr²",
            },
            {
              title: "Angular Momentum",
              description: "L = Iω; conserved when net torque is zero",
            },
            {
              title: "Rolling Motion",
              description: "Combination of translational and rotational motion",
            },
          ],
          importantFormulas: [
            { name: "Torque", formula: "τ = Iα = r × F" },
            { name: "Angular momentum", formula: "L = Iω" },
            { name: "Rotational KE", formula: "KE = ½Iω²" },
            { name: "Parallel axis theorem", formula: "I = Icm + Md²" },
          ],
          videoKeyword: "rotation",
        },
        {
          id: "phy-gravitation",
          name: "Gravitation",
          description:
            "Newton's law of gravitation, gravitational potential, orbital motion of satellites, Kepler's laws, and escape velocity.",
          keyConcepts: [
            {
              title: "Newton's Law of Gravitation",
              description:
                "F = GMm/r² — gravitational force between two masses",
            },
            {
              title: "Kepler's Laws",
              description:
                "Elliptical orbits, equal areas in equal times, T² ∝ r³",
            },
            {
              title: "Escape Velocity",
              description:
                "Minimum velocity to escape Earth's gravitational field",
            },
            {
              title: "Orbital Velocity",
              description:
                "Velocity required for a satellite to orbit at a given height",
            },
          ],
          importantFormulas: [
            { name: "Gravitational force", formula: "F = GMm/r²" },
            { name: "Escape velocity", formula: "ve = √(2GM/R)" },
            { name: "Orbital velocity", formula: "vo = √(GM/r)" },
            { name: "Kepler's third law", formula: "T² ∝ r³" },
          ],
          videoKeyword: "gravitation",
        },
      ],
    },
    {
      id: "phy-unit-2",
      number: 2,
      name: "Thermodynamics",
      topics: [
        {
          id: "phy-thermal",
          name: "Thermal Properties of Matter",
          description:
            "Heat, temperature, thermal expansion, calorimetry, and heat transfer by conduction, convection, and radiation.",
          keyConcepts: [
            {
              title: "Thermal Expansion",
              description:
                "Solids, liquids, and gases expand on heating; coefficient of linear, area, and volume expansion",
            },
            {
              title: "Calorimetry",
              description:
                "Heat gained = Heat lost; specific heat capacity Q = mcΔT",
            },
            {
              title: "Newton's Law of Cooling",
              description:
                "Rate of cooling ∝ temperature difference with surroundings",
            },
            {
              title: "Heat Transfer",
              description:
                "Conduction, Convection, and Radiation are three modes of heat transfer",
            },
          ],
          importantFormulas: [
            { name: "Heat", formula: "Q = mcΔT" },
            { name: "Linear expansion", formula: "ΔL = LαΔT" },
            { name: "Stefan's law", formula: "E = σAT⁴" },
            {
              name: "Wien's displacement",
              formula: "λmaxT = constant (2.9 × 10⁻³ m·K)",
            },
          ],
          videoKeyword: "thermodynamics",
        },
        {
          id: "phy-kinetic",
          name: "Kinetic Theory of Gases",
          description:
            "Ideal gas model, Maxwell-Boltzmann distribution, degrees of freedom, equipartition theorem, and mean free path.",
          keyConcepts: [
            {
              title: "Ideal Gas Law",
              description: "PV = nRT relates pressure, volume, and temperature",
            },
            {
              title: "RMS Speed",
              description:
                "Root mean square speed of gas molecules vrms = √(3RT/M)",
            },
            {
              title: "Equipartition Theorem",
              description: "Average energy per degree of freedom = ½kT",
            },
            {
              title: "Degrees of Freedom",
              description: "Monoatomic: 3, Diatomic: 5, Polyatomic: 6",
            },
          ],
          importantFormulas: [
            { name: "Ideal gas law", formula: "PV = nRT" },
            { name: "RMS speed", formula: "vrms = √(3RT/M)" },
            { name: "Mean KE per molecule", formula: "KE = (3/2)kT" },
            { name: "Pressure of ideal gas", formula: "P = (1/3)ρvrms²" },
          ],
          videoKeyword: "kinetic theory",
        },
        {
          id: "phy-thermo-laws",
          name: "Laws of Thermodynamics",
          description:
            "First and second laws of thermodynamics, internal energy, entropy, Carnot cycle, and efficiency of heat engines.",
          keyConcepts: [
            {
              title: "First Law",
              description: "ΔU = Q − W; energy is conserved",
            },
            {
              title: "Second Law",
              description:
                "Heat cannot flow spontaneously from cold to hot body; entropy of universe increases",
            },
            {
              title: "Carnot Efficiency",
              description: "Maximum efficiency η = 1 − T₂/T₁",
            },
            {
              title: "Entropy",
              description:
                "Measure of disorder; ΔS = Q/T for reversible process",
            },
          ],
          importantFormulas: [
            { name: "First law", formula: "ΔU = Q − W" },
            { name: "Carnot efficiency", formula: "η = 1 − T_cold/T_hot" },
            { name: "Work in isothermal", formula: "W = nRT ln(V₂/V₁)" },
            { name: "Entropy change", formula: "ΔS = Q/T" },
          ],
          videoKeyword: "thermodynamics laws",
        },
      ],
    },
    {
      id: "phy-unit-3",
      number: 3,
      name: "Electromagnetism",
      topics: [
        {
          id: "phy-electrostatics",
          name: "Electrostatics",
          description:
            "Electric charges, Coulomb's law, electric field, electric potential, capacitors, and dielectrics.",
          keyConcepts: [
            {
              title: "Coulomb's Law",
              description: "Force between charges F = kq₁q₂/r²",
            },
            {
              title: "Electric Field",
              description: "E = F/q; field due to point charge E = kq/r²",
            },
            {
              title: "Gauss's Law",
              description:
                "Total electric flux through a closed surface = q_enc/ε₀",
            },
            {
              title: "Capacitance",
              description: "C = Q/V; energy stored = ½CV²",
            },
          ],
          importantFormulas: [
            { name: "Coulomb's law", formula: "F = kq₁q₂/r²" },
            { name: "Electric field", formula: "E = kq/r²" },
            { name: "Gauss's law", formula: "∮E·dA = q/ε₀" },
            { name: "Energy in capacitor", formula: "U = ½CV² = Q²/2C" },
          ],
          videoKeyword: "electrostatics",
        },
        {
          id: "phy-current",
          name: "Current Electricity",
          description:
            "Electric current, Ohm's law, resistance, Kirchhoff's laws, Wheatstone bridge, and RC circuits.",
          keyConcepts: [
            { title: "Ohm's Law", description: "V = IR; resistance R = ρL/A" },
            {
              title: "Kirchhoff's Laws",
              description:
                "KCL: Sum of currents at junction = 0; KVL: Sum of EMFs = Sum of IR drops in a loop",
            },
            {
              title: "Wheatstone Bridge",
              description:
                "Balanced condition: R₁/R₂ = R₃/R₄; used to find unknown resistance",
            },
            { title: "Power", description: "P = VI = I²R = V²/R" },
          ],
          importantFormulas: [
            { name: "Ohm's law", formula: "V = IR" },
            { name: "Resistivity", formula: "R = ρL/A" },
            { name: "Power", formula: "P = I²R = V²/R" },
            { name: "Series resistors", formula: "Req = R₁ + R₂ + ..." },
            {
              name: "Parallel resistors",
              formula: "1/Req = 1/R₁ + 1/R₂ + ...",
            },
          ],
          videoKeyword: "current electricity",
        },
        {
          id: "phy-magnetism",
          name: "Magnetic Effects of Current",
          description:
            "Biot-Savart law, Ampere's law, magnetic force on current-carrying conductors, and electromagnetic induction.",
          keyConcepts: [
            {
              title: "Biot-Savart Law",
              description:
                "dB = μ₀I dl × r̂ / (4πr²); magnetic field due to current element",
            },
            {
              title: "Faraday's Law",
              description:
                "EMF = −dΦ/dt; induced EMF due to changing magnetic flux",
            },
            {
              title: "Lenz's Law",
              description: "Induced current opposes the change that caused it",
            },
            { title: "Ampere's Law", description: "∮B·dl = μ₀I_enc" },
          ],
          importantFormulas: [
            { name: "Force on current in B field", formula: "F = BIL sinθ" },
            { name: "Faraday's law", formula: "EMF = −dΦ/dt" },
            { name: "Magnetic field (solenoid)", formula: "B = μ₀nI" },
            { name: "Self inductance EMF", formula: "EMF = −L dI/dt" },
          ],
          videoKeyword: "magnetism",
        },
      ],
    },
    {
      id: "phy-unit-4",
      number: 4,
      name: "Optics",
      topics: [
        {
          id: "phy-ray-optics",
          name: "Ray Optics",
          description:
            "Reflection, refraction, lenses, mirrors, prisms, and optical instruments including microscope and telescope.",
          keyConcepts: [
            {
              title: "Snell's Law",
              description:
                "n₁sinθ₁ = n₂sinθ₂; describes refraction at interface",
            },
            {
              title: "Mirror Formula",
              description: "1/f = 1/v + 1/u; magnification m = −v/u",
            },
            {
              title: "Lens Formula",
              description: "1/f = 1/v − 1/u; power P = 1/f (in diopters)",
            },
            {
              title: "Total Internal Reflection",
              description:
                "Occurs when light travels from denser to rarer medium at angle > critical angle",
            },
          ],
          importantFormulas: [
            { name: "Mirror formula", formula: "1/f = 1/v + 1/u" },
            { name: "Lens formula", formula: "1/f = 1/v − 1/u" },
            { name: "Snell's law", formula: "n₁sinθ₁ = n₂sinθ₂" },
            { name: "Critical angle", formula: "sinC = 1/n" },
            {
              name: "Lensmaker's equation",
              formula: "1/f = (n−1)(1/R₁ − 1/R₂)",
            },
          ],
          videoKeyword: "optics",
        },
        {
          id: "phy-wave-optics",
          name: "Wave Optics",
          description:
            "Wave nature of light, Huygens' principle, interference, diffraction, and polarisation.",
          keyConcepts: [
            {
              title: "Young's Double Slit",
              description: "Interference pattern: fringe width β = λD/d",
            },
            {
              title: "Diffraction",
              description:
                "Bending of light around obstacles; single slit minima at a sinθ = nλ",
            },
            {
              title: "Polarisation",
              description:
                "Malus' law: I = I₀cos²θ; transverse nature of light",
            },
            {
              title: "Huygens' Principle",
              description:
                "Each point on a wavefront acts as source of secondary wavelets",
            },
          ],
          importantFormulas: [
            { name: "Fringe width (YDSE)", formula: "β = λD/d" },
            { name: "Condition for bright fringe", formula: "Δx = nλ" },
            { name: "Condition for dark fringe", formula: "Δx = (2n−1)λ/2" },
            { name: "Malus' law", formula: "I = I₀cos²θ" },
          ],
          videoKeyword: "wave optics",
        },
      ],
    },
    {
      id: "phy-unit-5",
      number: 5,
      name: "Modern Physics",
      topics: [
        {
          id: "phy-dual-nature",
          name: "Dual Nature of Radiation and Matter",
          description:
            "Wave-particle duality, photoelectric effect, de Broglie wavelength, and Compton scattering.",
          keyConcepts: [
            {
              title: "Photoelectric Effect",
              description:
                "KE_max = hν − φ (work function); no electrons below threshold frequency",
            },
            {
              title: "de Broglie Hypothesis",
              description:
                "Every particle has associated wavelength λ = h/p = h/mv",
            },
            {
              title: "Photon",
              description: "Energy E = hν; momentum p = h/λ = hν/c",
            },
            {
              title: "Compton Effect",
              description:
                "Scattering of X-rays by electrons proves particle nature of photons",
            },
          ],
          importantFormulas: [
            { name: "Photon energy", formula: "E = hν = hc/λ" },
            { name: "Photoelectric effect", formula: "KE_max = hν − φ" },
            { name: "de Broglie wavelength", formula: "λ = h/mv" },
            { name: "Stopping potential", formula: "eV₀ = hν − φ" },
          ],
          videoKeyword: "photoelectric",
        },
        {
          id: "phy-atoms",
          name: "Atoms and Nuclei",
          description:
            "Bohr's model of hydrogen atom, nuclear structure, radioactivity, nuclear reactions, and binding energy.",
          keyConcepts: [
            {
              title: "Bohr's Model",
              description:
                "Electrons orbit in fixed shells; energy En = −13.6/n² eV for hydrogen",
            },
            {
              title: "Radioactivity",
              description:
                "Alpha (α), Beta (β), and Gamma (γ) decay; half-life T½ = 0.693/λ",
            },
            {
              title: "Binding Energy",
              description:
                "BE = (Δm)c²; mass defect Δm = Zm_p + Nm_n − M_nucleus",
            },
            {
              title: "Nuclear Fission/Fusion",
              description:
                "Fission: heavy nucleus splits; Fusion: light nuclei combine; both release energy",
            },
          ],
          importantFormulas: [
            { name: "Bohr energy levels", formula: "En = −13.6/n² eV" },
            { name: "Bohr radius", formula: "rn = 0.529n² Å" },
            { name: "Radioactive decay", formula: "N = N₀e^(−λt)" },
            { name: "Half life", formula: "T½ = 0.693/λ" },
            { name: "Binding energy", formula: "BE = Δm × 931.5 MeV" },
          ],
          videoKeyword: "atoms nuclei",
        },
        {
          id: "phy-semiconductors",
          name: "Semiconductor Electronics",
          description:
            "Energy bands, semiconductors, p-n junction, diodes, transistors, and logic gates.",
          keyConcepts: [
            {
              title: "Energy Bands",
              description:
                "Valence band, conduction band, and forbidden energy gap determine conductivity",
            },
            {
              title: "p-n Junction",
              description:
                "Depletion region formed; forward bias reduces, reverse bias increases barrier",
            },
            {
              title: "Transistor",
              description:
                "NPN/PNP transistor as amplifier and switch; α and β current gain",
            },
            {
              title: "Logic Gates",
              description: "AND, OR, NOT, NAND, NOR gates; Boolean algebra",
            },
          ],
          importantFormulas: [
            { name: "Current gain α", formula: "α = IC/IE" },
            { name: "Current gain β", formula: "β = IC/IB" },
            { name: "Relation between α and β", formula: "β = α/(1−α)" },
            { name: "Diode equation", formula: "I = I₀(e^(eV/kT) − 1)" },
          ],
          videoKeyword: "semiconductor",
        },
      ],
    },
    {
      id: "phy-unit-6",
      number: 6,
      name: "Waves and Oscillations",
      topics: [
        {
          id: "phy-shm",
          name: "Simple Harmonic Motion",
          description:
            "Oscillatory motion, restoring force, time period, energy in SHM, and spring-mass systems.",
          keyConcepts: [
            {
              title: "SHM Definition",
              description: "Acceleration ∝ −displacement; F = −kx",
            },
            {
              title: "Time Period",
              description: "T = 2π√(m/k) for spring; T = 2π√(L/g) for pendulum",
            },
            {
              title: "Energy in SHM",
              description: "Total energy E = ½kA²; constant throughout motion",
            },
            {
              title: "Phase",
              description:
                "x = A sin(ωt + φ); displacement as sinusoidal function of time",
            },
          ],
          importantFormulas: [
            { name: "Spring period", formula: "T = 2π√(m/k)" },
            { name: "Pendulum period", formula: "T = 2π√(L/g)" },
            { name: "SHM displacement", formula: "x = A sin(ωt + φ)" },
            { name: "Total energy", formula: "E = ½kA² = ½mω²A²" },
          ],
          videoKeyword: "simple harmonic motion",
        },
        {
          id: "phy-waves",
          name: "Waves",
          description:
            "Transverse and longitudinal waves, speed of sound, superposition principle, standing waves, Doppler effect.",
          keyConcepts: [
            {
              title: "Wave Equation",
              description: "y = A sin(kx − ωt); wave number k = 2π/λ",
            },
            {
              title: "Speed of Sound",
              description: "v = √(B/ρ) in medium; v = 332 m/s in air at 0°C",
            },
            {
              title: "Standing Waves",
              description:
                "Formed by superposition of two identical waves travelling in opposite directions",
            },
            {
              title: "Doppler Effect",
              description:
                "Apparent change in frequency due to relative motion between source and observer",
            },
          ],
          importantFormulas: [
            { name: "Wave speed", formula: "v = λf = ω/k" },
            {
              name: "Doppler (source moving)",
              formula: "f' = f(v ± vo)/(v ∓ vs)",
            },
            { name: "Beats frequency", formula: "f_beat = |f₁ − f₂|" },
            { name: "Open pipe harmonics", formula: "fn = nv/2L" },
          ],
          videoKeyword: "waves",
        },
      ],
    },
  ],
};

// ─── Chemistry ────────────────────────────────────────────────────────────────

const chemistrySubject: IITSubject = {
  name: "Chemistry",
  icon: "⚗️",
  color: "neon-green",
  description: "Physical Chemistry, Inorganic Chemistry, Organic Chemistry",
  units: [
    {
      id: "chem-unit-1",
      number: 1,
      name: "Physical Chemistry",
      topics: [
        {
          id: "chem-mole",
          name: "Mole Concept & Stoichiometry",
          description:
            "Mole, Avogadro's number, molar mass, empirical and molecular formulas, limiting reagent, and percentage yield.",
          keyConcepts: [
            {
              title: "Mole",
              description:
                "1 mole = 6.022 × 10²³ particles (Avogadro's number)",
            },
            {
              title: "Molar Mass",
              description:
                "Mass of 1 mole in grams; numerically equal to molecular weight",
            },
            {
              title: "Limiting Reagent",
              description:
                "Reactant that gets consumed first and limits the amount of product formed",
            },
            {
              title: "Percentage Composition",
              description: "Mass fraction of each element in a compound × 100",
            },
          ],
          importantFormulas: [
            { name: "Number of moles", formula: "n = mass / molar mass" },
            { name: "Number of particles", formula: "N = n × NA" },
            { name: "Volume at STP", formula: "V = n × 22.4 L" },
            {
              name: "Empirical formula mass",
              formula: "Molecular formula = n × Empirical formula",
            },
          ],
          videoKeyword: "mole concept",
        },
        {
          id: "chem-atomic-structure",
          name: "Atomic Structure",
          description:
            "Bohr model, quantum numbers, electronic configuration, orbitals, and Aufbau principle.",
          keyConcepts: [
            {
              title: "Quantum Numbers",
              description:
                "n (principal), l (azimuthal), ml (magnetic), ms (spin) define each electron's state",
            },
            {
              title: "Aufbau Principle",
              description:
                "Electrons fill orbitals in order of increasing energy",
            },
            {
              title: "Hund's Rule",
              description:
                "Electrons occupy separate orbitals with parallel spins before pairing",
            },
            {
              title: "Pauli Exclusion Principle",
              description:
                "No two electrons can have identical set of all four quantum numbers",
            },
          ],
          importantFormulas: [
            { name: "Energy of electron (Bohr)", formula: "En = −13.6/n² eV" },
            { name: "de Broglie wavelength", formula: "λ = h/mv" },
            { name: "Heisenberg uncertainty", formula: "Δx·Δp ≥ h/4π" },
            { name: "Wave number (Rydberg)", formula: "ν̃ = RH(1/n₁² − 1/n₂²)" },
          ],
          videoKeyword: "atomic structure",
        },
        {
          id: "chem-equilibrium",
          name: "Chemical Equilibrium",
          description:
            "Equilibrium constant, Le Chatelier's principle, ionic equilibrium, pH, buffers, and solubility product.",
          keyConcepts: [
            {
              title: "Equilibrium Constant",
              description:
                "Kc = [products]^coeff / [reactants]^coeff; Kp = Kc(RT)^Δn",
            },
            {
              title: "Le Chatelier's Principle",
              description:
                "System at equilibrium shifts to oppose any change imposed on it",
            },
            {
              title: "pH Scale",
              description: "pH = −log[H⁺]; Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C",
            },
            {
              title: "Buffer Solution",
              description: "Resists pH change; Henderson-Hasselbalch equation",
            },
          ],
          importantFormulas: [
            {
              name: "Equilibrium constant",
              formula: "Kc = [C]c[D]d / [A]a[B]b",
            },
            { name: "Kp-Kc relation", formula: "Kp = Kc(RT)^Δng" },
            { name: "pH formula", formula: "pH = −log[H⁺]" },
            {
              name: "Henderson-Hasselbalch",
              formula: "pH = pKa + log([A⁻]/[HA])",
            },
          ],
          videoKeyword: "chemical equilibrium",
        },
        {
          id: "chem-thermo-chem",
          name: "Thermochemistry",
          description:
            "Enthalpy, entropy, Gibbs free energy, Hess's law, and spontaneity of reactions.",
          keyConcepts: [
            {
              title: "Enthalpy",
              description: "H = U + PV; ΔH = heat at constant pressure",
            },
            {
              title: "Hess's Law",
              description:
                "Enthalpy change is independent of path; ΔH = ΣΔHf(products) − ΣΔHf(reactants)",
            },
            {
              title: "Gibbs Free Energy",
              description: "ΔG = ΔH − TΔS; reaction spontaneous if ΔG < 0",
            },
            {
              title: "Bond Enthalpy",
              description:
                "Energy required to break 1 mole of bonds in gaseous state",
            },
          ],
          importantFormulas: [
            { name: "Gibbs free energy", formula: "ΔG = ΔH − TΔS" },
            { name: "Gibbs-equilibrium relation", formula: "ΔG° = −RT ln K" },
            {
              name: "Kirchhoff's law",
              formula: "ΔH(T₂) = ΔH(T₁) + ΔCp(T₂−T₁)",
            },
            {
              name: "Entropy at equilibrium",
              formula: "ΔS_univ = 0 (reversible); > 0 (spontaneous)",
            },
          ],
          videoKeyword: "thermochemistry",
        },
        {
          id: "chem-electrochemistry",
          name: "Electrochemistry",
          description:
            "Electrolytic cells, galvanic cells, EMF, Nernst equation, conductance, and Faraday's laws.",
          keyConcepts: [
            {
              title: "Nernst Equation",
              description:
                "E = E° − (RT/nF)ln Q; cell potential depends on concentration",
            },
            {
              title: "Faraday's Laws",
              description:
                "Mass deposited proportional to charge; equivalent mass determines relative deposition",
            },
            {
              title: "Kohlrausch's Law",
              description:
                "Limiting molar conductivity = sum of individual ionic conductivities",
            },
            {
              title: "Standard Electrode Potential",
              description:
                "Measured against standard hydrogen electrode (SHE = 0 V)",
            },
          ],
          importantFormulas: [
            { name: "Nernst equation", formula: "E = E° − (0.0591/n) log Q" },
            { name: "Gibbs-EMF relation", formula: "ΔG° = −nFE°" },
            { name: "Faraday's first law", formula: "m = ZIt = (M/nF)It" },
            { name: "Molar conductivity", formula: "Λm = κ/c" },
          ],
          videoKeyword: "electrochemistry",
        },
      ],
    },
    {
      id: "chem-unit-2",
      number: 2,
      name: "Inorganic Chemistry",
      topics: [
        {
          id: "chem-periodic",
          name: "Periodic Table & Periodicity",
          description:
            "Periodic trends in atomic radius, ionization energy, electron affinity, electronegativity, and oxidation states.",
          keyConcepts: [
            {
              title: "Atomic Radius",
              description:
                "Decreases across period (nuclear charge increases); increases down group (new shell added)",
            },
            {
              title: "Ionization Energy",
              description:
                "Energy to remove electron; increases across period, decreases down group",
            },
            {
              title: "Electron Affinity",
              description:
                "Energy released when electron added; halogens have highest EA",
            },
            {
              title: "Electronegativity",
              description:
                "Fluorine most electronegative; used to predict bond polarity",
            },
          ],
          importantFormulas: [
            {
              name: "Effective nuclear charge",
              formula: "Zeff = Z − σ (Slater's rules)",
            },
            {
              name: "Ionic radius trend",
              formula: "Cation < parent atom < anion",
            },
            {
              name: "Shielding effect",
              formula: "Increases down group reducing Zeff",
            },
            {
              name: "Ionization energy",
              formula: "IE increases across period, exceptions at Be, N, Mg, P",
            },
          ],
          videoKeyword: "periodic table",
        },
        {
          id: "chem-coordination",
          name: "Coordination Chemistry",
          description:
            "Werner's theory, IUPAC nomenclature, isomerism in coordination compounds, and crystal field theory.",
          keyConcepts: [
            {
              title: "Coordination Number",
              description:
                "Number of ligands directly bonded to central metal atom",
            },
            {
              title: "Crystal Field Theory",
              description:
                "Splitting of d orbitals in crystal field; Δo for octahedral, Δt for tetrahedral",
            },
            {
              title: "IUPAC Nomenclature",
              description:
                "Ligands named first alphabetically, then metal with oxidation state in brackets",
            },
            {
              title: "Isomerism",
              description:
                "Geometric (cis/trans), optical, linkage, ionisation, and coordination isomers",
            },
          ],
          importantFormulas: [
            {
              name: "CFSE (weak field)",
              formula: "CFSE = −0.4 × (Δo) × n(t2g) − 0.6 × (Δo) × n(eg)",
            },
            {
              name: "Magnetic moment",
              formula: "μ = √(n(n+2)) BM where n = unpaired electrons",
            },
            {
              name: "EAN rule",
              formula: "EAN = Z − charge + 2 × (no. of ligands)",
            },
            {
              name: "Hybridization d²sp³",
              formula: "Octahedral complex; inner orbital",
            },
          ],
          videoKeyword: "coordination chemistry",
        },
        {
          id: "chem-s-block",
          name: "s-Block and p-Block Elements",
          description:
            "Properties, reactions, and compounds of alkali metals, alkaline earth metals, and p-block elements (Groups 13–18).",
          keyConcepts: [
            {
              title: "Alkali Metals",
              description:
                "Group 1; very reactive, form +1 ions; Li most electronegative, Cs most reactive",
            },
            {
              title: "Alkaline Earth Metals",
              description:
                "Group 2; form +2 ions; Mg and Be anomalous behaviour",
            },
            {
              title: "p-Block Trends",
              description:
                "Inert pair effect; oxidation states, hydrides, oxides, halides across groups",
            },
            {
              title: "Noble Gases",
              description:
                "Group 18; almost chemically inert; Xe forms compounds with F and O",
            },
          ],
          importantFormulas: [
            {
              name: "Flame test colours",
              formula:
                "Li-red, Na-yellow, K-violet, Cs-blue, Ba-green, Sr-crimson",
            },
            {
              name: "Diagonal relationship",
              formula: "Li-Mg, Be-Al, B-Si show similar properties",
            },
            {
              name: "Inert pair effect",
              formula: "Heavier p-block elements prefer lower oxidation states",
            },
            {
              name: "Solubility of hydroxides",
              formula:
                "Increases down Group 2: Be(OH)₂ < Mg(OH)₂ < ... < Ba(OH)₂",
            },
          ],
          videoKeyword: "periodic table elements",
        },
        {
          id: "chem-d-block",
          name: "d-Block and f-Block Elements",
          description:
            "Transition metals, variable oxidation states, catalytic properties, coloured compounds, and lanthanides/actinides.",
          keyConcepts: [
            {
              title: "Variable Oxidation States",
              description:
                "Due to small energy difference between (n-1)d and ns orbitals",
            },
            {
              title: "Coloured Compounds",
              description:
                "Due to d-d transitions in partially filled d orbitals",
            },
            {
              title: "Catalytic Properties",
              description:
                "Transition metals act as catalysts due to variable valency and surface area",
            },
            {
              title: "Lanthanide Contraction",
              description:
                "Steady decrease in ionic radii across lanthanides due to poor f-orbital shielding",
            },
          ],
          importantFormulas: [
            {
              name: "Electronic config Fe",
              formula: "[Ar] 3d⁶ 4s²; Fe²⁺ = [Ar] 3d⁶; Fe³⁺ = [Ar] 3d⁵",
            },
            { name: "Magnetic moment", formula: "μ = √(n(n+2)) BM" },
            {
              name: "Common oxidation states",
              formula: "Mn: +2,+4,+7; Cr: +2,+3,+6; Fe: +2,+3",
            },
            {
              name: "Lanthanide contraction",
              formula: "Zr ≈ Hf in size due to lanthanide contraction",
            },
          ],
          videoKeyword: "transition metals",
        },
      ],
    },
    {
      id: "chem-unit-3",
      number: 3,
      name: "Organic Chemistry",
      topics: [
        {
          id: "chem-basic-organic",
          name: "Basic Concepts of Organic Chemistry",
          description:
            "Hybridization, IUPAC nomenclature, isomerism, inductive/mesomeric effects, and reactive intermediates.",
          keyConcepts: [
            {
              title: "Hybridization",
              description:
                "sp³ (tetrahedral), sp² (trigonal planar), sp (linear) carbon",
            },
            {
              title: "Inductive Effect",
              description:
                "Electron withdrawal/donation through σ bonds; -I and +I groups",
            },
            {
              title: "Resonance",
              description:
                "Delocalization of π electrons; actual structure is hybrid of all resonance forms",
            },
            {
              title: "Reactive Intermediates",
              description:
                "Carbocation (sp²), Carbanion (sp³), Radical (sp²), Carbene",
            },
          ],
          importantFormulas: [
            {
              name: "IUPAC suffix",
              formula: "Alkane -ane, Alkene -ene, Alkyne -yne, Alcohol -ol",
            },
            {
              name: "R/S configuration",
              formula:
                "Priority by atomic number; clockwise = R, anticlockwise = S",
            },
            {
              name: "E/Z isomerism",
              formula:
                "E = opposite sides (entgegen); Z = same side (zusammen)",
            },
            {
              name: "Stability order carbocations",
              formula: "3° > 2° > 1° > CH₃⁺",
            },
          ],
          videoKeyword: "organic chemistry basics",
        },
        {
          id: "chem-hydrocarbons",
          name: "Hydrocarbons",
          description:
            "Alkanes (substitution), alkenes (addition), alkynes (addition), and aromatic compounds (electrophilic substitution).",
          keyConcepts: [
            {
              title: "Alkane Reactions",
              description:
                "Free radical halogenation; reactivity of tertiary > secondary > primary H",
            },
            {
              title: "Alkene Reactions",
              description:
                "Electrophilic addition; Markovnikov's rule; anti-Markovnikov (peroxide)",
            },
            {
              title: "Benzene Reactions",
              description:
                "Electrophilic aromatic substitution: nitration, halogenation, sulfonation, Friedel-Crafts",
            },
            {
              title: "Aromatic Stability",
              description:
                "Benzene is stabilized by resonance energy of ~150 kJ/mol",
            },
          ],
          importantFormulas: [
            {
              name: "Markovnikov's rule",
              formula:
                "H adds to carbon with more H (positive charge on more substituted C)",
            },
            {
              name: "Peroxide effect",
              formula:
                "Anti-Markovnikov addition in presence of peroxide (free radical mechanism)",
            },
            {
              name: "Baeyer's strain theory",
              formula: "Ring strain ∝ deviation from tetrahedral angles",
            },
            {
              name: "Hückel rule",
              formula:
                "Aromatic if (4n + 2) π electrons in planar cyclic conjugated system",
            },
          ],
          videoKeyword: "hydrocarbons organic",
        },
        {
          id: "chem-functional-groups",
          name: "Functional Group Chemistry",
          description:
            "Alcohols, aldehydes, ketones, carboxylic acids, amines, and their reactions. Named reactions in organic chemistry.",
          keyConcepts: [
            {
              title: "Nucleophilic Addition",
              description:
                "Characteristic of carbonyl compounds; Nu attacks electrophilic carbon",
            },
            {
              title: "Acidity Order",
              description:
                "Carboxylic acids > Phenols > Alcohols > Alkynes > Water > Alkenes > Alkanes",
            },
            {
              title: "Aldol Condensation",
              description:
                "β-hydroxy carbonyl compound formed; requires α-hydrogen",
            },
            {
              title: "Cannizzaro Reaction",
              description:
                "Disproportionation of aldehydes without α-H; one reduced, one oxidised",
            },
          ],
          importantFormulas: [
            {
              name: "Lucas test",
              formula:
                "3° alcohol reacts immediately; 1° doesn't react without heat",
            },
            {
              name: "Iodoform test",
              formula: "CH₃CO- or CH₃CHOH- gives yellow ppt with I₂/NaOH",
            },
            {
              name: "Tollen's test",
              formula: "Ag(NH₃)₂⁺ + RCHO → Ag mirror (aldehydes only)",
            },
            {
              name: "Fehling's test",
              formula: "Blue Cu²⁺ → red Cu₂O precipitate with aldehydes",
            },
          ],
          videoKeyword: "functional groups organic",
        },
        {
          id: "chem-polymers",
          name: "Polymers and Biomolecules",
          description:
            "Classification of polymers, addition and condensation polymerisation, carbohydrates, proteins, nucleic acids, and vitamins.",
          keyConcepts: [
            {
              title: "Addition Polymers",
              description:
                "Formed from monomers with double bonds; no by-product; PVC, polyethylene",
            },
            {
              title: "Condensation Polymers",
              description:
                "Formed with loss of small molecule; nylon, dacron, bakelite",
            },
            {
              title: "Carbohydrates",
              description:
                "Monosaccharides (glucose, fructose), disaccharides (sucrose, maltose), polysaccharides (starch, cellulose)",
            },
            {
              title: "Proteins",
              description:
                "Polymers of amino acids linked by peptide bonds; primary to quaternary structure",
            },
          ],
          importantFormulas: [
            {
              name: "Glucose formula",
              formula: "C₆H₁₂O₆; empirical formula CH₂O",
            },
            {
              name: "Degree of polymerisation",
              formula: "n = M_polymer / M_monomer",
            },
            {
              name: "Peptide bond",
              formula: "−CO−NH− formed by condensation of −COOH and −NH₂",
            },
            {
              name: "DNA bases",
              formula:
                "Purines: Adenine, Guanine; Pyrimidines: Thymine, Cytosine",
            },
          ],
          videoKeyword: "polymers biomolecules",
        },
      ],
    },
  ],
};

// ─── Mathematics ──────────────────────────────────────────────────────────────

const mathSubject: IITSubject = {
  name: "Mathematics",
  icon: "📐",
  color: "neon-purple",
  description:
    "Algebra, Calculus, Coordinate Geometry, Trigonometry, Vectors & 3D",
  units: [
    {
      id: "math-unit-1",
      number: 1,
      name: "Algebra",
      topics: [
        {
          id: "math-quadratic",
          name: "Quadratic Equations & Theory of Equations",
          description:
            "Roots of quadratic equations, Vieta's formulas, nature of roots, common roots, and higher degree polynomials.",
          keyConcepts: [
            {
              title: "Vieta's Formulas",
              description: "Sum of roots α+β = −b/a; product αβ = c/a",
            },
            {
              title: "Nature of Roots",
              description:
                "Discriminant D = b²−4ac: D>0 real distinct, D=0 real equal, D<0 complex",
            },
            {
              title: "Symmetric Functions",
              description:
                "Expressions involving roots that don't change when roots are interchanged",
            },
            {
              title: "Transformation of Roots",
              description:
                "If α,β are roots of f(x), find equations with roots f(α), f(β)",
            },
          ],
          importantFormulas: [
            { name: "Quadratic formula", formula: "x = (−b ± √(b²−4ac)) / 2a" },
            { name: "Sum of roots", formula: "α + β = −b/a" },
            { name: "Product of roots", formula: "αβ = c/a" },
            { name: "Discriminant", formula: "D = b² − 4ac" },
          ],
          videoKeyword: "quadratic equations",
        },
        {
          id: "math-sequences",
          name: "Sequences and Series",
          description:
            "Arithmetic progression, geometric progression, harmonic progression, AGM inequality, and sum of special series.",
          keyConcepts: [
            {
              title: "AP",
              description:
                "Common difference d = aₙ − aₙ₋₁; nth term = a + (n−1)d; Sₙ = n/2(2a + (n−1)d)",
            },
            {
              title: "GP",
              description:
                "Common ratio r = aₙ/aₙ₋₁; nth term = arⁿ⁻¹; Sₙ = a(rⁿ−1)/(r−1)",
            },
            {
              title: "AM-GM Inequality",
              description: "AM ≥ GM ≥ HM; equality when all terms are equal",
            },
            {
              title: "Sum of Special Series",
              description:
                "Σn = n(n+1)/2; Σn² = n(n+1)(2n+1)/6; Σn³ = [n(n+1)/2]²",
            },
          ],
          importantFormulas: [
            { name: "AP nth term", formula: "aₙ = a + (n−1)d" },
            { name: "AP sum", formula: "Sₙ = n/2 × (2a + (n−1)d)" },
            { name: "GP sum (r≠1)", formula: "Sₙ = a(rⁿ−1)/(r−1)" },
            { name: "Infinite GP (|r|<1)", formula: "S∞ = a/(1−r)" },
          ],
          videoKeyword: "sequences series",
        },
        {
          id: "math-complex",
          name: "Complex Numbers",
          description:
            "Argand plane, modulus and argument, polar form, De Moivre's theorem, and roots of unity.",
          keyConcepts: [
            {
              title: "Polar Form",
              description:
                "z = r(cosθ + i sinθ) = re^(iθ); r = |z|, θ = arg(z)",
            },
            {
              title: "De Moivre's Theorem",
              description: "(cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ)",
            },
            {
              title: "nth Roots of Unity",
              description:
                "n equally spaced points on unit circle; ωᵏ = e^(2πik/n)",
            },
            {
              title: "Conjugate Properties",
              description: "|z|² = z·z̄; Re(z) = (z+z̄)/2; Im(z) = (z−z̄)/2i",
            },
          ],
          importantFormulas: [
            { name: "Modulus", formula: "|z| = √(a² + b²)" },
            { name: "Argument", formula: "arg(z) = tan⁻¹(b/a)" },
            { name: "De Moivre's theorem", formula: "(re^(iθ))ⁿ = rⁿe^(inθ)" },
            { name: "Euler's formula", formula: "e^(iθ) = cosθ + i sinθ" },
          ],
          videoKeyword: "complex numbers",
        },
        {
          id: "math-matrices",
          name: "Matrices and Determinants",
          description:
            "Types of matrices, matrix operations, determinants, inverse, Cramer's rule, and rank of a matrix.",
          keyConcepts: [
            {
              title: "Determinant Properties",
              description:
                "det(AB) = det(A)det(B); det(Aᵀ) = det(A); det(kA) = kⁿdet(A)",
            },
            {
              title: "Inverse Matrix",
              description: "A⁻¹ = adj(A)/det(A); exists only if det(A) ≠ 0",
            },
            {
              title: "Cramer's Rule",
              description: "xᵢ = Dᵢ/D where D = det(coefficient matrix)",
            },
            {
              title: "Eigenvalues",
              description: "Roots of characteristic equation det(A − λI) = 0",
            },
          ],
          importantFormulas: [
            { name: "2×2 determinant", formula: "|a b; c d| = ad − bc" },
            { name: "Inverse formula", formula: "A⁻¹ = (1/det A) × adj A" },
            {
              name: "Cayley-Hamilton",
              formula: "Every matrix satisfies its own characteristic equation",
            },
            {
              name: "Trace",
              formula: "tr(A) = sum of diagonal elements = sum of eigenvalues",
            },
          ],
          videoKeyword: "matrices determinants",
        },
        {
          id: "math-permutation",
          name: "Permutations and Combinations",
          description:
            "Fundamental counting principle, factorial, permutations, combinations, binomial theorem, and multinomial theorem.",
          keyConcepts: [
            {
              title: "Permutation",
              description:
                "nPr = n!/(n−r)!; arrangement of r items from n distinct items",
            },
            {
              title: "Combination",
              description:
                "nCr = n!/r!(n−r)!; selection of r items from n; nCr = nCn-r",
            },
            {
              title: "Binomial Theorem",
              description:
                "(x+y)ⁿ = ΣnCr xⁿ⁻ʳ yʳ; general term Tr+1 = nCr xⁿ⁻ʳ yʳ",
            },
            {
              title: "Pigeonhole Principle",
              description:
                "If n items in m containers with n>m, at least one container has >1 item",
            },
          ],
          importantFormulas: [
            { name: "Permutation", formula: "nPr = n! / (n−r)!" },
            { name: "Combination", formula: "nCr = n! / (r!(n−r)!)" },
            { name: "Binomial general term", formula: "Tr+1 = nCr xⁿ⁻ʳ yʳ" },
            { name: "Sum of binomial coefficients", formula: "ΣnCr = 2ⁿ" },
          ],
          videoKeyword: "permutation combination",
        },
      ],
    },
    {
      id: "math-unit-2",
      number: 2,
      name: "Calculus",
      topics: [
        {
          id: "math-limits",
          name: "Limits, Continuity and Differentiability",
          description:
            "Definition of limits, indeterminate forms, L'Hôpital's rule, continuity, and differentiability conditions.",
          keyConcepts: [
            {
              title: "L'Hôpital's Rule",
              description:
                "For 0/0 or ∞/∞ form: lim f(x)/g(x) = lim f'(x)/g'(x)",
            },
            {
              title: "Standard Limits",
              description:
                "lim(sinx/x) = 1; lim((1+1/n)ⁿ) = e; lim((aˣ−1)/x) = ln a",
            },
            {
              title: "Continuity",
              description:
                "f is continuous at a if lim f(x) = f(a); left limit = right limit = value",
            },
            {
              title: "Differentiability",
              description:
                "Differentiable implies continuous; converse not always true",
            },
          ],
          importantFormulas: [
            {
              name: "Sandwich theorem",
              formula: "g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L ⟹ lim f = L",
            },
            { name: "Standard limit", formula: "lim(x→0) sin(x)/x = 1" },
            { name: "Exponential limit", formula: "lim(x→0) (eˣ−1)/x = 1" },
            { name: "Logarithmic limit", formula: "lim(x→0) ln(1+x)/x = 1" },
          ],
          videoKeyword: "limits calculus",
        },
        {
          id: "math-differentiation",
          name: "Differentiation",
          description:
            "Derivatives of standard functions, chain rule, implicit differentiation, parametric differentiation, and higher-order derivatives.",
          keyConcepts: [
            {
              title: "Chain Rule",
              description: "d/dx[f(g(x))] = f'(g(x)) · g'(x)",
            },
            { title: "Product Rule", description: "d/dx[uv] = u'v + uv'" },
            {
              title: "Quotient Rule",
              description: "d/dx[u/v] = (u'v − uv')/v²",
            },
            {
              title: "Rolle's Theorem",
              description:
                "If f(a)=f(b) and f continuous on [a,b], there exists c where f'(c)=0",
            },
          ],
          importantFormulas: [
            { name: "d/dx(xⁿ)", formula: "nxⁿ⁻¹" },
            { name: "d/dx(sin x)", formula: "cos x" },
            { name: "d/dx(ln x)", formula: "1/x" },
            { name: "d/dx(eˣ)", formula: "eˣ" },
            { name: "d/dx(tan⁻¹x)", formula: "1/(1+x²)" },
          ],
          videoKeyword: "differentiation calculus",
        },
        {
          id: "math-integration",
          name: "Integration",
          description:
            "Standard integrals, integration by parts, partial fractions, definite integrals, and applications (area, volume).",
          keyConcepts: [
            {
              title: "Integration by Parts",
              description: "∫u dv = uv − ∫v du; ILATE rule for choosing u",
            },
            {
              title: "Definite Integral Properties",
              description: "∫f(x) = −∫f(x) from b to a; ∫f(a+b−x) = ∫f(x)",
            },
            {
              title: "Area Under Curve",
              description: "A = ∫|f(x)|dx between two limits",
            },
            {
              title: "Fundamental Theorem",
              description: "d/dx[∫f(t)dt from a to x] = f(x)",
            },
          ],
          importantFormulas: [
            { name: "∫xⁿ dx", formula: "xⁿ⁺¹/(n+1) + C (n ≠ −1)" },
            { name: "∫sin x dx", formula: "−cos x + C" },
            { name: "∫eˣ dx", formula: "eˣ + C" },
            { name: "∫1/x dx", formula: "ln|x| + C" },
            { name: "∫1/(1+x²) dx", formula: "tan⁻¹x + C" },
          ],
          videoKeyword: "integration calculus",
        },
        {
          id: "math-differential-eq",
          name: "Differential Equations",
          description:
            "Order and degree, variable separable, homogeneous, linear first-order, and Bernoulli's equations.",
          keyConcepts: [
            {
              title: "Variable Separable",
              description: "f(y)dy = g(x)dx; separate variables then integrate",
            },
            {
              title: "Homogeneous Equation",
              description: "dy/dx = f(y/x); substitute y = vx",
            },
            {
              title: "Linear First-Order",
              description: "dy/dx + P(x)y = Q(x); integrating factor = e^∫P dx",
            },
            {
              title: "Bernoulli's Equation",
              description:
                "dy/dx + P(x)y = Q(x)yⁿ; reduce by substitution v = y^(1−n)",
            },
          ],
          importantFormulas: [
            { name: "Integrating factor", formula: "IF = e^(∫P(x)dx)" },
            { name: "Solution with IF", formula: "y × IF = ∫Q(x) × IF dx + C" },
            {
              name: "Homogeneous substitution",
              formula: "y = vx; dy/dx = v + x dv/dx",
            },
            { name: "Separation of variables", formula: "∫f(y)dy = ∫g(x)dx" },
          ],
          videoKeyword: "differential equations",
        },
      ],
    },
    {
      id: "math-unit-3",
      number: 3,
      name: "Coordinate Geometry",
      topics: [
        {
          id: "math-straight-lines",
          name: "Straight Lines",
          description:
            "Various forms of line equations, angle between lines, distance formulas, family of lines, and locus problems.",
          keyConcepts: [
            {
              title: "Slope-Intercept Form",
              description: "y = mx + c; m = slope, c = y-intercept",
            },
            {
              title: "Normal Form",
              description:
                "x cosα + y sinα = p; p = perpendicular distance from origin",
            },
            {
              title: "Distance from Point to Line",
              description: "d = |ax₁ + by₁ + c| / √(a² + b²)",
            },
            {
              title: "Angle Between Lines",
              description: "tan θ = |m₁ − m₂| / |1 + m₁m₂|",
            },
          ],
          importantFormulas: [
            { name: "Distance formula", formula: "d = √((x₂−x₁)² + (y₂−y₁)²)" },
            {
              name: "Section formula",
              formula: "x = (mx₂+nx₁)/(m+n), y = (my₂+ny₁)/(m+n)",
            },
            { name: "Equation of line", formula: "y − y₁ = m(x − x₁)" },
            {
              name: "Point-line distance",
              formula: "d = |ax₀ + by₀ + c| / √(a²+b²)",
            },
          ],
          videoKeyword: "straight lines coordinate",
        },
        {
          id: "math-circles",
          name: "Circles",
          description:
            "Equation of circle, tangent and normal, chord of contact, family of circles, and radical axis.",
          keyConcepts: [
            {
              title: "Standard Equation",
              description: "(x−h)² + (y−k)² = r²; centre (h,k), radius r",
            },
            {
              title: "Tangent from External Point",
              description:
                "Length of tangent = √(S₁) where S₁ = x₁² + y₁² + 2gx₁ + 2fy₁ + c",
            },
            {
              title: "Chord of Contact",
              description: "xx₁ + yy₁ + g(x+x₁) + f(y+y₁) + c = 0",
            },
            {
              title: "Radical Axis",
              description:
                "Locus of point with equal tangent lengths to two circles: S₁ − S₂ = 0",
            },
          ],
          importantFormulas: [
            {
              name: "General form",
              formula:
                "x² + y² + 2gx + 2fy + c = 0; centre (−g,−f), r = √(g²+f²−c)",
            },
            {
              name: "Tangent at point",
              formula: "xx₁ + yy₁ = r² (for circle x²+y²=r²)",
            },
            { name: "Condition for tangency", formula: "c = ±r√(1+m²)" },
            { name: "Orthogonal circles", formula: "2g₁g₂ + 2f₁f₂ = c₁ + c₂" },
          ],
          videoKeyword: "circles geometry",
        },
        {
          id: "math-conics",
          name: "Conic Sections",
          description:
            "Parabola, ellipse, and hyperbola — equations, eccentricity, foci, directrix, tangents, normals, and reflective properties.",
          keyConcepts: [
            {
              title: "Parabola",
              description:
                "y² = 4ax; focus (a,0), directrix x = −a, eccentricity e = 1",
            },
            {
              title: "Ellipse",
              description:
                "x²/a² + y²/b² = 1 (a>b); e = c/a < 1; b² = a²(1−e²)",
            },
            {
              title: "Hyperbola",
              description: "x²/a² − y²/b² = 1; e > 1; b² = a²(e²−1)",
            },
            {
              title: "Focal Chord",
              description:
                "Chord passing through focus; semi-latus rectum = b²/a",
            },
          ],
          importantFormulas: [
            {
              name: "Parabola y² = 4ax",
              formula: "Focus (a,0); Directrix x = −a; Latus rectum = 4a",
            },
            { name: "Ellipse eccentricity", formula: "e = c/a = √(1 − b²/a²)" },
            {
              name: "Hyperbola eccentricity",
              formula: "e = c/a = √(1 + b²/a²)",
            },
            {
              name: "Tangent to parabola",
              formula: "y = mx + a/m; point of tangency (a/m², 2a/m)",
            },
          ],
          videoKeyword: "conic sections",
        },
        {
          id: "math-3d",
          name: "3D Geometry & Vectors",
          description:
            "Direction cosines, lines and planes in 3D, dot product, cross product, and applications.",
          keyConcepts: [
            {
              title: "Direction Cosines",
              description: "l = cosα, m = cosβ, n = cosγ; l² + m² + n² = 1",
            },
            {
              title: "Dot Product",
              description: "a·b = |a||b|cosθ; a·b = a₁b₁ + a₂b₂ + a₃b₃",
            },
            {
              title: "Cross Product",
              description: "a×b = |a||b|sinθ n̂; gives area of parallelogram",
            },
            {
              title: "Equation of Plane",
              description: "ax + by + cz = d; normal vector (a,b,c)",
            },
          ],
          importantFormulas: [
            {
              name: "Distance between points",
              formula: "d = √((x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²)",
            },
            { name: "Dot product", formula: "a·b = a₁b₁ + a₂b₂ + a₃b₃" },
            { name: "Cross product magnitude", formula: "|a×b| = |a||b|sinθ" },
            {
              name: "Scalar triple product",
              formula: "[a b c] = a·(b×c) = volume of parallelepiped",
            },
          ],
          videoKeyword: "vectors 3d geometry",
        },
      ],
    },
    {
      id: "math-unit-4",
      number: 4,
      name: "Trigonometry",
      topics: [
        {
          id: "math-trig-functions",
          name: "Trigonometric Functions",
          description:
            "Basic trig ratios, identities, graphs, transformations, and values of standard angles.",
          keyConcepts: [
            {
              title: "Pythagorean Identities",
              description:
                "sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ",
            },
            {
              title: "Compound Angles",
              description:
                "sin(A±B) = sinA cosB ± cosA sinB; cos(A±B) = cosA cosB ∓ sinA sinB",
            },
            {
              title: "Double Angle",
              description:
                "sin2A = 2sinAcosA; cos2A = cos²A − sin²A = 2cos²A − 1",
            },
            {
              title: "Sum to Product",
              description: "sinC + sinD = 2sin((C+D)/2)cos((C−D)/2)",
            },
          ],
          importantFormulas: [
            { name: "Basic identity", formula: "sin²θ + cos²θ = 1" },
            { name: "sin(A+B)", formula: "sinA cosB + cosA sinB" },
            { name: "cos(A+B)", formula: "cosA cosB − sinA sinB" },
            { name: "tan(A+B)", formula: "(tanA + tanB) / (1 − tanA tanB)" },
          ],
          videoKeyword: "trigonometry",
        },
        {
          id: "math-inverse-trig",
          name: "Inverse Trigonometry",
          description:
            "Domain and range of inverse trig functions, principal values, and properties.",
          keyConcepts: [
            {
              title: "Principal Values",
              description:
                "sin⁻¹ range [−π/2, π/2]; cos⁻¹ range [0,π]; tan⁻¹ range (−π/2, π/2)",
            },
            {
              title: "Complementary Relations",
              description: "sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2",
            },
            {
              title: "Addition Formulas",
              description: "tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) if xy < 1",
            },
            {
              title: "Double Angle",
              description: "2sin⁻¹x = sin⁻¹(2x√(1−x²))",
            },
          ],
          importantFormulas: [
            { name: "sin⁻¹x + cos⁻¹x", formula: "π/2" },
            {
              name: "tan⁻¹x + tan⁻¹y",
              formula: "tan⁻¹((x+y)/(1−xy)) for xy < 1",
            },
            { name: "tan⁻¹x − tan⁻¹y", formula: "tan⁻¹((x−y)/(1+xy))" },
            { name: "sin(cos⁻¹x)", formula: "√(1−x²)" },
          ],
          videoKeyword: "inverse trigonometry",
        },
      ],
    },
    {
      id: "math-unit-5",
      number: 5,
      name: "Probability & Statistics",
      topics: [
        {
          id: "math-probability",
          name: "Probability",
          description:
            "Classical probability, conditional probability, Bayes' theorem, random variables, binomial and Poisson distributions.",
          keyConcepts: [
            {
              title: "Conditional Probability",
              description:
                "P(A|B) = P(A∩B)/P(B); probability of A given B has occurred",
            },
            {
              title: "Bayes' Theorem",
              description: "P(Aᵢ|B) = P(Aᵢ)P(B|Aᵢ) / ΣP(Aⱼ)P(B|Aⱼ)",
            },
            {
              title: "Binomial Distribution",
              description: "P(X=r) = nCr pʳ qⁿ⁻ʳ; mean = np; variance = npq",
            },
            {
              title: "Independent Events",
              description: "P(A∩B) = P(A)·P(B) if A and B are independent",
            },
          ],
          importantFormulas: [
            { name: "Classical probability", formula: "P(A) = n(A) / n(S)" },
            { name: "Bayes' theorem", formula: "P(A|B) = P(B|A)P(A) / P(B)" },
            { name: "Binomial mean", formula: "μ = np" },
            { name: "Binomial variance", formula: "σ² = npq" },
          ],
          videoKeyword: "probability statistics",
        },
      ],
    },
  ],
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const iitSubjects: IITSubject[] = [
  physicsSubject,
  chemistrySubject,
  mathSubject,
];

export function getIITSubject(name: string): IITSubject | undefined {
  return iitSubjects.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export function getAllIITTopics(): IITTopic[] {
  return iitSubjects.flatMap((s) => s.units.flatMap((u) => u.topics));
}
