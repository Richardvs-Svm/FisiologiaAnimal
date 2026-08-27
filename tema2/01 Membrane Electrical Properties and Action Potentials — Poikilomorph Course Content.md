```markdown
---
id: membrane-electrical-properties-action-potentials
title: Membrane Electrical Properties and Action Potentials
course: Animal Physiology
unit: Excitable Cells
topic: Electrophysiology
level: undergraduate
language: en
status: draft
order: 4
source_of_truth: true
bloom:
  - understand
  - apply
  - analyze
prerequisites:
  - cell-membrane-structure
  - ion-concentration-gradients
keywords:
  - membrane potential
  - resting membrane potential
  - capacitance
  - resistance
  - conductance
  - equilibrium potential
  - reversal potential
  - driving force
  - sodium
  - potassium
  - action potential
  - depolarization
  - repolarization
  - hyperpolarization
  - sodium-potassium pump
---

# Membrane Electrical Properties and Action Potentials

## Learning objectives

After completing this section, students should be able to:

1. Explain why the interior of a resting cell is electrically negative relative to the extracellular fluid.
2. Distinguish local charge separation across the membrane from the overall electrical neutrality of the cytoplasm.
3. Explain why the plasma membrane behaves electrically like a capacitor.
4. Relate membrane capacitance to the structure of the lipid bilayer.
5. Explain the meanings of membrane resistance, conductance, permeability, and equilibrium potential.
6. Interpret the electrical equivalent circuit of a biological membrane.
7. Explain why opening an ion channel tends to move the membrane potential toward that ion's equilibrium potential.
8. Define electrochemical driving force.
9. Explain the sequence of ion-channel events that generates an action potential.
10. Distinguish the rapid electrical events of an action potential from the slower role of the Na+/K+-ATPase.
11. Explain why Na+ influx produces depolarization and K+ efflux produces repolarization.
12. Explain the origin of afterhyperpolarization.
13. Identify and correct common misconceptions about action potentials.

---

# 1. Why is the inside of a cell negative?

A typical neuron has a resting membrane potential of approximately:

\[
V_m \approx -70\text{ mV}
\]

where membrane potential is defined as:

\[
V_m = V_{\text{inside}} - V_{\text{outside}}
\]

A value of -70 mV therefore means that the intracellular side of the membrane is electrically negative relative to the extracellular side.

This does not mean that the entire cytoplasm contains a large net negative charge.

The bulk cytoplasm and extracellular fluid are both almost electrically neutral.

The voltage results from an extremely small separation of electrical charge across the plasma membrane.

---

## 1.1 Negatively charged substances inside the cell

The cytoplasm contains many negatively charged molecules that do not readily cross the plasma membrane.

These include:

- proteins containing negatively charged amino-acid residues;
- nucleic acids;
- ATP and other phosphorylated molecules;
- phosphate-containing metabolites;
- other large organic anions.

These intracellular, relatively impermeant negative charges can be represented schematically as:

\[
A^-
\]

The intracellular fluid also contains a high concentration of K+.

A very simplified representation is therefore:

\[
\text{Inside: high }K^+ + A^-
\]

whereas the extracellular fluid contains relatively high concentrations of:

\[
Na^+,\ Cl^-,\ Ca^{2+}
\]

and lower concentrations of K+.

---

## 1.2 Why does K+ matter so much at rest?

The resting plasma membrane is usually much more permeable to K+ than to Na+.

This is largely due to K+ leak channels.

Because K+ concentration is higher inside the cell than outside, the chemical concentration gradient favors:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

When a small amount of K+ leaves the cell, negatively charged intracellular molecules cannot follow it through the membrane.

This creates a slight excess of negative charge along the intracellular surface of the membrane.

At the same time, an equivalent slight excess of positive charge develops along the extracellular surface.

Conceptually:

```text
Extracellular fluid

+ + + + + + +      tiny excess positive charge
-----------------
   lipid bilayer
-----------------
- - - - - - -      tiny excess negative charge

Cytoplasm
(nearly electrically neutral overall)
```

The separation of these charges produces the membrane voltage.

---

## 1.3 Only a tiny fraction of ions is involved

A crucial concept is that generating a membrane potential does not require a substantial change in the total concentrations of K+, Na+, or other ions in the cell.

Only a very small fraction of the available ions needs to redistribute immediately adjacent to the membrane.

Therefore, the statement:

> "The inside of the neuron is negatively charged"

is a useful shorthand, but it can be misleading.

A more precise statement is:

> The intracellular surface of the membrane has a slight excess of negative charge relative to the extracellular surface.

The bulk intracellular and extracellular solutions remain approximately electrically neutral.

---

## Key concept

Membrane voltage results from a very small separation of electrical charge across the plasma membrane, not from the entire cytoplasm becoming strongly negatively charged.

---

# 2. Why does the plasma membrane behave like a capacitor?

An electrical capacitor contains:

1. one conductive region;
2. an insulating layer;
3. another conductive region.

A biological membrane has essentially the same physical organization.

---

## 2.1 The extracellular fluid is conductive

Extracellular fluid contains mobile ions such as:

\[
Na^+,\ K^+,\ Ca^{2+},\ Cl^-
\]

Because these charged particles can move through the solution, extracellular fluid conducts electricity.

---

## 2.2 The cytoplasm is conductive

The cytoplasm also contains large numbers of dissolved ions and charged molecules.

It therefore also behaves as an electrical conductor.

---

## 2.3 The lipid bilayer is an electrical insulator

The central region of the phospholipid bilayer is hydrophobic.

Charged ions cannot readily pass through this hydrophobic core.

The lipid bilayer therefore provides a high-resistance barrier separating two electrically conductive solutions.

The arrangement is analogous to:

```text
Conductive extracellular fluid
+++++++++++++++++++++++++++++++

===============================
        Lipid bilayer
        Insulating layer
===============================

-------------------------------
Conductive intracellular fluid
```

This is fundamentally similar to the structure of a capacitor.

---

# 3. Charge storage across the membrane

At rest, small excesses of opposite charge accumulate on the two sides of the membrane:

```text
Outside

+ + + + + + +

=================
  lipid bilayer
=================

- - - - - - -

Inside
```

The lipid bilayer prevents these charges from freely crossing and neutralizing each other.

The membrane therefore stores separated electrical charge.

For a capacitor:

\[
Q = CV
\]

where:

- \(Q\) = stored charge;
- \(C\) = capacitance;
- \(V\) = voltage difference.

Therefore:

\[
V = \frac{Q}{C}
\]

A change in the amount or distribution of charge on the membrane surfaces therefore changes membrane voltage.

---

# 4. Why does membrane thickness matter?

For an ideal parallel-plate capacitor:

\[
C = \frac{\varepsilon A}{d}
\]

where:

- \(C\) = capacitance;
- \(\varepsilon\) = dielectric permittivity of the insulating material;
- \(A\) = surface area;
- \(d\) = distance separating the charges.

A plasma membrane is extremely thin, typically on the order of several nanometers.

Because:

\[
C \propto \frac{1}{d}
\]

a thin insulating membrane can have substantial capacitance.

A commonly used approximate specific capacitance for biological membranes is:

\[
C_m \approx 1\ \mu\text{F}/\text{cm}^2
\]

This value is widely useful in electrophysiology.

---

# 5. The electrical equivalent circuit of a membrane

A patch of biological membrane can be represented electrically using:

- a capacitor representing the lipid bilayer;
- resistive or conductive pathways representing ion channels;
- batteries representing the equilibrium potentials generated by ion concentration gradients.

A simplified equivalent circuit is:

```text
                      Cm
                      ║
                      ║
      ────────────────╫────────────────
      │               │               │
     RNa             RK              RCl
      │               │               │
     ENa             EK              ECl
      │               │               │
      ────────────────┴────────────────
```

---

# 6. What does \(C_m\) mean?

\[
C_m
\]

is membrane capacitance.

It represents the ability of the lipid bilayer to store separated charge.

Because a capacitor must be charged or discharged, membrane voltage cannot normally change instantaneously.

The rate at which voltage changes depends partly on membrane capacitance.

---

# 7. What do \(R_{Na}\), \(R_K\), and \(R_{Cl}\) mean?

The symbol:

\[
R
\]

represents electrical resistance.

Therefore:

\[
R_{Na}
\]

represents the resistance of the membrane to Na+ current.

Similarly:

\[
R_K
\]

represents resistance to K+ current, and:

\[
R_{Cl}
\]

represents resistance to Cl- current.

If few Na+ channels are open:

\[
R_{Na}\uparrow
\]

If many Na+ channels open:

\[
R_{Na}\downarrow
\]

The membrane therefore becomes easier for Na+ current to cross.

---

# 8. Conductance

Electrophysiologists frequently describe ion-channel activity using conductance rather than resistance.

Conductance is the inverse of resistance:

\[
g = \frac{1}{R}
\]

Therefore:

\[
g_{Na} = \frac{1}{R_{Na}}
\]

If Na+ channels open:

\[
R_{Na}\downarrow
\]

and:

\[
g_{Na}\uparrow
\]

Likewise:

\[
g_K = \frac{1}{R_K}
\]

and opening K+ channels causes:

\[
g_K\uparrow
\]

---

## Resistance, conductance, and permeability

These concepts are closely related but should not be treated as perfectly identical.

### Resistance

Describes opposition to electrical current:

\[
R
\]

### Conductance

Describes how easily electrical current can flow:

\[
g = \frac{1}{R}
\]

### Permeability

Describes how readily a particular ion can cross the membrane.

It is often represented by:

\[
P_{Na},\ P_K,\ P_{Cl}
\]

A graph showing a rapid increase in:

\[
P_{Na}
\]

during an action potential means that the membrane has become much more permeable to Na+.

In many qualitative explanations:

\[
P_{Na}\uparrow
\]

corresponds to:

\[
g_{Na}\uparrow
\]

and:

\[
R_{Na}\downarrow
\]

although permeability and conductance are not physically identical quantities.

---

# 9. What do \(E_{Na}\), \(E_K\), and \(E_{Cl}\) mean?

The symbol:

\[
E
\]

represents the equilibrium potential, often also called the reversal potential.

Thus:

\[
E_{Na}
\]

is the equilibrium potential for Na+.

\[
E_K
\]

is the equilibrium potential for K+.

\[
E_{Cl}
\]

is the equilibrium potential for Cl-.

For an ion moving passively through a perfectly selective channel, its equilibrium potential corresponds to its Nernst potential.

---

# 10. What is an equilibrium potential?

An ion experiences two important forces across a membrane:

1. a chemical force produced by its concentration gradient;
2. an electrical force produced by the membrane voltage.

The equilibrium potential is the membrane voltage at which these forces exactly balance one another.

At:

\[
V_m = E_{\text{ion}}
\]

there is no net movement of that ion through an open, selective channel.

---

# 11. The equilibrium potential of Na+

Na+ concentration is normally much higher outside the cell than inside.

The chemical gradient therefore strongly favors:

\[
Na^+_{\text{outside}}
\rightarrow
Na^+_{\text{inside}}
\]

At a resting membrane potential of approximately:

\[
V_m = -70\text{ mV}
\]

the negative intracellular voltage also attracts positively charged Na+ inward.

Thus both chemical and electrical forces favor Na+ entry.

As Na+ enters and the membrane becomes progressively more positive, the electrical force opposing additional Na+ entry becomes stronger.

Eventually, the inside becomes sufficiently positive that:

\[
\text{electrical force outward}
=
\text{chemical force inward}
\]

For a typical neuron, a representative value is:

\[
E_{Na}\approx +60\text{ mV}
\]

At:

\[
V_m = E_{Na}
\]

there is no net Na+ movement.

---

# 12. Why is it also called a reversal potential?

Suppose:

\[
E_{Na}=+60\text{ mV}
\]

At membrane potentials below +60 mV, opening Na+ channels generally produces inward Na+ current.

At:

\[
V_m=+60\text{ mV}
\]

net Na+ current becomes zero.

If the membrane were experimentally made even more positive:

\[
V_m>+60\text{ mV}
\]

the net direction of Na+ movement would reverse, and Na+ would tend to move outward.

Therefore +60 mV is called the Na+ reversal potential.

---

# 13. The equilibrium potential of K+

K+ concentration is normally much higher inside the cell than outside.

The chemical concentration gradient therefore favors:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

As K+ leaves, the inside becomes more negative.

That negative intracellular voltage attracts K+ back inward.

At a sufficiently negative voltage:

\[
\text{chemical force outward}
=
\text{electrical force inward}
\]

A representative value for a typical neuron is:

\[
E_K\approx -90\text{ mV}
\]

At:

\[
V_m=E_K
\]

there is no net K+ movement through an open selective K+ channel.

---

# 14. Why are equilibrium potentials represented as batteries?

Ion concentration gradients contain stored electrochemical potential energy.

For example, maintaining a high concentration of Na+ outside and a low concentration inside represents stored energy.

When Na+ channels open, this gradient can drive electrical current.

The equilibrium potential can therefore be represented mathematically as an electrical battery.

In the equivalent circuit:

\[
E_{Na}
\]

acts like a battery tending to pull membrane voltage toward approximately:

\[
+60\text{ mV}
\]

while:

\[
E_K
\]

acts like another battery tending to pull membrane voltage toward approximately:

\[
-90\text{ mV}
\]

The different ionic pathways therefore behave like competing electrical influences on membrane voltage.

---

# 15. A powerful general rule

Opening an ion channel tends to move membrane potential toward that ion's equilibrium potential.

Thus:

\[
\boxed{
\text{Opening Na+ channels}
\Rightarrow
V_m\rightarrow E_{Na}
}
\]

and:

\[
\boxed{
\text{Opening K+ channels}
\Rightarrow
V_m\rightarrow E_K
}
\]

This is more useful than simply memorizing:

> Na+ makes voltage go up and K+ makes voltage go down.

The effect of opening a channel always depends on the relationship between:

\[
V_m
\]

and:

\[
E_{\text{ion}}
\]

---

# 16. Electrochemical driving force

For a particular ion, the difference:

\[
V_m-E_{\text{ion}}
\]

is called the electrochemical driving force.

A simplified form of Ohm's law for an ion is:

\[
\boxed{
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
}
\]

where:

- \(I_{\text{ion}}\) = ionic current;
- \(g_{\text{ion}}\) = conductance to that ion;
- \(V_m\) = membrane potential;
- \(E_{\text{ion}}\) = equilibrium potential.

Because:

\[
g=\frac{1}{R}
\]

the same relationship can be written:

\[
\boxed{
I_{\text{ion}}
=
\frac{V_m-E_{\text{ion}}}
{R_{\text{ion}}}
}
\]

---

# 17. Two things determine ionic current

The equation:

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

shows that ionic current depends on two factors.

## 17.1 How many channels are effectively open?

This is represented by:

\[
g_{\text{ion}}
\]

If conductance is very low, little current flows even if the electrochemical gradient is large.

---

## 17.2 How far is the membrane potential from equilibrium?

This is represented by:

\[
V_m-E_{\text{ion}}
\]

If:

\[
V_m=E_{\text{ion}}
\]

then:

\[
V_m-E_{\text{ion}}=0
\]

and therefore:

\[
I_{\text{ion}}=0
\]

even if the channels are open.

---

# 18. Worked example: Na+ at resting membrane potential

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_{Na}=+60\text{ mV}
\]

Then:

\[
V_m-E_{Na}
=
-70-(+60)
\]

\[
=-130\text{ mV}
\]

The driving force is very large.

If Na+ channels open, Na+ produces a strong inward current.

This is why opening voltage-gated Na+ channels can rapidly depolarize a neuron.

---

# 19. Worked example: Na+ near the peak of an action potential

Suppose membrane potential has risen to:

\[
V_m=+30\text{ mV}
\]

while:

\[
E_{Na}=+60\text{ mV}
\]

Then:

\[
V_m-E_{Na}
=
30-60
\]

\[
=-30\text{ mV}
\]

Na+ still has an inward driving force, but it is much smaller than at rest.

Compare:

\[
-130\text{ mV}
\]

at rest with:

\[
-30\text{ mV}
\]

near the peak.

Thus Na+ influx becomes progressively less favored as membrane voltage approaches \(E_{Na}\).

---

# 20. Worked example: K+ at rest

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

Then:

\[
V_m-E_K
=
-70-(-90)
\]

\[
=+20\text{ mV}
\]

This produces an outward electrochemical driving force for K+.

K+ therefore tends to leave through available K+ channels.

---

# 21. Worked example: K+ at the peak of an action potential

Suppose:

\[
V_m=+30\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

Then:

\[
V_m-E_K
=
30-(-90)
\]

\[
=+120\text{ mV}
\]

The outward driving force for K+ is now extremely large.

If voltage-gated K+ channels are simultaneously open:

\[
g_K\uparrow
\]

the resulting outward K+ current is strong.

This contributes directly to rapid repolarization.

---

# 22. Resting membrane potential as a competition between ions

At rest:

\[
V_m\approx -70\text{ mV}
\]

A typical set of representative equilibrium potentials might be:

\[
E_K\approx -90\text{ mV}
\]

\[
E_{Na}\approx +60\text{ mV}
\]

The resting membrane is generally much more permeable to K+ than to Na+.

Therefore, resting membrane potential lies much closer to:

\[
E_K
\]

than to:

\[
E_{Na}
\]

However, the resting membrane is not exclusively permeable to K+.

Na+, Cl-, and other ions may also contribute.

The actual resting membrane potential therefore reflects the combined influence of multiple ionic concentration gradients and membrane permeabilities.

---

# 23. Membrane capacitance and the speed of voltage change

Because the membrane behaves as a capacitor, changing membrane voltage requires redistribution of charge.

A capacitor cannot normally change its voltage instantaneously.

The membrane has an electrical time constant:

\[
\boxed{
\tau = R_m C_m
}
\]

where:

- \(\tau\) = membrane time constant;
- \(R_m\) = membrane resistance;
- \(C_m\) = membrane capacitance.

The time constant describes how rapidly membrane voltage responds to an electrical current.

A larger membrane capacitance means more charge must be moved to produce a given voltage change.

A larger membrane resistance reduces current leakage and allows voltage changes to persist longer.

---

# 24. Ion channels as controlled electrical pathways

The lipid bilayer itself is a strong electrical insulator.

Ion channels create selective conductive pathways through that insulating membrane.

Thus:

- lipid bilayer → capacitor;
- ion channels → resistive/conductive pathways;
- ion concentration gradients → batteries;
- membrane potential → voltage.

This electrical model is not merely an analogy.

It provides a quantitatively useful description of membrane electrophysiology.

---

# 25. The action potential

An action potential is a rapid, transient change in membrane potential produced by coordinated changes in membrane ion conductance.

A typical neuronal action potential includes:

1. resting membrane potential;
2. initial depolarization;
3. threshold;
4. rapid depolarization;
5. peak or overshoot;
6. repolarization;
7. afterhyperpolarization;
8. return to resting membrane behavior.

---

# 26. Initial stimulus and threshold

A stimulus may cause membrane potential to become less negative.

For example:

\[
-70
\rightarrow
-65
\rightarrow
-60
\rightarrow
-55\text{ mV}
\]

The exact threshold differs among cells, but approximately:

\[
-55\text{ mV}
\]

is often used as a teaching example.

The initial depolarization may result from:

- ligand-gated channels;
- mechanosensitive channels;
- receptor potentials;
- synaptic currents;
- electrical current from an adjacent region of membrane;
- other physiological stimuli.

If threshold is reached, voltage-gated Na+ channels begin opening in sufficient numbers to initiate regenerative depolarization.

---

# 27. Rapid activation of voltage-gated Na+ channels

Once threshold is reached:

\[
\text{voltage-gated Na+ channels open}
\]

This increases Na+ conductance:

\[
g_{Na}\uparrow\uparrow
\]

and Na+ permeability:

\[
P_{Na}\uparrow\uparrow
\]

At a resting membrane potential:

\[
V_m\approx-70\text{ mV}
\]

the membrane is far below:

\[
E_{Na}\approx+60\text{ mV}
\]

so the electrochemical driving force for Na+ entry is very large.

Na+ therefore moves:

\[
Na^+_{\text{outside}}
\rightarrow
Na^+_{\text{inside}}
\]

This inward movement of positive charge depolarizes the membrane.

---

# 28. Positive feedback during depolarization

Voltage-gated Na+ channel activation is regenerative.

The sequence is:

\[
\text{depolarization}
\]

\[
\Downarrow
\]

\[
\text{Na+ channels open}
\]

\[
\Downarrow
\]

\[
Na^+\text{ enters}
\]

\[
\Downarrow
\]

\[
\text{further depolarization}
\]

\[
\Downarrow
\]

\[
\text{more Na+ channels open}
\]

This positive-feedback cycle produces the extremely rapid rising phase of the action potential.

---

# 29. Membrane voltage during depolarization

As Na+ enters:

\[
V_m
\]

may move approximately:

\[
-70
\rightarrow
-55
\rightarrow
-30
\rightarrow
0
\rightarrow
+30\text{ mV}
\]

The exact values vary among cells.

The membrane potential is being driven toward:

\[
E_{Na}
\]

because Na+ conductance has become dominant.

---

# 30. Why does the action potential not reach \(E_{Na}\)?

The membrane usually does not reach:

\[
E_{Na}\approx+60\text{ mV}
\]

for several reasons.

Most importantly:

1. voltage-gated Na+ channels begin to inactivate;
2. voltage-gated K+ channels have begun opening;
3. the Na+ driving force becomes smaller as \(V_m\) approaches \(E_{Na}\).

Thus the action-potential peak is commonly closer to:

\[
+30\text{ mV}
\]

than to +60 mV.

---

# 31. Na+ channel inactivation

Voltage-gated Na+ channels do not simply remain open during depolarization.

Shortly after activation, they enter an inactivated state.

As a result:

\[
g_{Na}\downarrow
\]

and:

\[
P_{Na}\downarrow
\]

Na+ influx therefore decreases sharply.

This is a crucial event in terminating the rising phase of the action potential.

---

# 32. Delayed activation of voltage-gated K+ channels

Voltage-gated K+ channels also respond to depolarization.

However, many of the K+ channels responsible for a classical action potential activate more slowly than voltage-gated Na+ channels.

Thus:

\[
P_K
\]

and:

\[
g_K
\]

rise after the rapid rise in Na+ permeability.

The Na+ and K+ events overlap in time.

It is therefore incorrect to imagine that all Na+ movement completely stops before K+ movement begins.

---

# 33. Interpreting permeability graphs

A typical permeability graph shows:

- a rapid, narrow increase in \(P_{Na}\);
- a slower, delayed, broader increase in \(P_K\).

Conceptually:

```text
Permeability

     PNa
      /\
     /  \
____/    \________________

           PK
          /  \
         /    \
________/      \___________

                         time
```

The narrow Na+ peak corresponds to rapid activation followed by inactivation of voltage-gated Na+ channels.

The broader K+ curve reflects slower activation and slower closing of voltage-gated K+ channels.

---

# 34. Repolarization

During repolarization, K+ moves out of the cell.

The direction is:

\[
\boxed{
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
}
\]

This is a critical point.

K+ does not normally enter the neuron to repolarize it.

At the peak of the action potential:

\[
V_m\approx+30\text{ mV}
\]

while:

\[
E_K\approx-90\text{ mV}
\]

This creates a very large outward driving force for K+.

At the same time:

\[
g_K\uparrow
\]

Therefore a strong outward K+ current occurs.

Positive charge leaves the cell, and membrane voltage becomes progressively more negative:

\[
+30
\rightarrow
0
\rightarrow
-30
\rightarrow
-70\text{ mV}
\]

This is repolarization.

---

# 35. The two main events producing rapid repolarization

Rapid repolarization results primarily from:

\[
\boxed{
\text{Na+ channel inactivation}
+
\text{increased K+ conductance}
}
\]

The combination is essential.

Na+ entry decreases while K+ exit increases.

---

# 36. The Na+/K+-ATPase does not produce the rapid falling phase

A common misconception is:

> Na+ enters during depolarization, and then the Na+/K+ pump rapidly removes it to repolarize the membrane.

This is incorrect.

The Na+/K+-ATPase works continuously, but it is far too slow to account for the millisecond-scale falling phase of a typical action potential.

Rapid repolarization is produced primarily by ion-channel behavior:

\[
\text{Na+ channels inactivate}
\]

and:

\[
\text{K+ channels open}
\]

The Na+/K+-ATPase has a different role.

---

# 37. What does the Na+/K+-ATPase actually do?

The Na+/K+-ATPase uses ATP to transport:

\[
3Na^+
\]

out of the cell and:

\[
2K^+
\]

into the cell per transport cycle.

Schematically:

\[
3Na^+_{\text{inside}}
\rightarrow
3Na^+_{\text{outside}}
\]

and:

\[
2K^+_{\text{outside}}
\rightarrow
2K^+_{\text{inside}}
\]

This maintains the Na+ and K+ concentration gradients over long periods.

The pump therefore maintains the conditions that make repeated action potentials possible.

---

## Key distinction

Ion channels generate the rapid electrical events of an action potential.

The Na+/K+-ATPase maintains the ionic gradients that make those electrical events possible.

---

# 38. Why does one action potential not destroy the ion gradients?

Only a tiny fraction of the cell's total Na+ and K+ ions crosses the membrane during a single action potential.

Therefore, one action potential produces an extremely small change in the bulk intracellular and extracellular concentrations of these ions.

The neuron does not need to completely restore all ion concentrations after every individual action potential before it can fire again.

The Na+/K+-ATPase continuously compensates for ion movements over longer timescales.

---

# 39. Afterhyperpolarization

Voltage-gated K+ channels generally close more slowly than voltage-gated Na+ channels inactivate.

As a result, K+ conductance can remain elevated after the membrane has returned near its resting potential.

K+ therefore continues to leave:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

and membrane voltage may temporarily become more negative than the resting value:

\[
V_m<-70\text{ mV}
\]

For example:

\[
V_m\approx-80\text{ mV}
\]

This phase is called afterhyperpolarization.

Because the membrane remains relatively permeable to K+, membrane voltage temporarily approaches:

\[
E_K
\]

more closely than it does at rest.

---

# 40. Return to resting membrane behavior

As voltage-gated K+ channels close:

\[
g_K\downarrow
\]

the special conductance state associated with the action potential disappears.

The membrane returns to the resting mixture of ion permeabilities.

Resting membrane potential is again determined primarily by:

- K+ leak permeability;
- smaller contributions from other ions;
- the ionic concentration gradients maintained over time by active transport.

---

# 41. Action potential as charging and discharging a capacitor

The capacitor model provides another way to understand the action potential.

At rest, the membrane capacitor has a small excess of negative charge on its intracellular surface.

When Na+ channels open:

\[
Na^+_{\text{outside}}
\rightarrow
Na^+_{\text{inside}}
\]

positive charge reaches the intracellular surface.

This changes the charge stored across the membrane capacitor and causes:

\[
V_m
\]

to become less negative.

This is depolarization.

If enough positive charge enters, the polarity of the membrane voltage briefly reverses.

Later, K+ leaves:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

removing positive charge from the intracellular side.

The membrane capacitor is therefore driven back toward its resting polarity.

This is repolarization.

---

# 42. Summary of the complete sequence

```text
RESTING MEMBRANE
Vm ≈ -70 mV
        ↓
Stimulus depolarizes membrane
        ↓
THRESHOLD
        ↓
Voltage-gated Na+ channels activate
        ↓
gNa ↑↑↑
PNa ↑↑↑
        ↓
Na+ enters cell
        ↓
DEPOLARIZATION
        ↓
More Na+ channels activate
        ↓
Positive feedback
        ↓
Rapid rising phase
        ↓
Na+ channels inactivate
+
Delayed voltage-gated K+ channels are now strongly activated
        ↓
gNa ↓
gK ↑↑
        ↓
K+ leaves cell
        ↓
REPOLARIZATION
        ↓
K+ channels remain open briefly
        ↓
Continued K+ efflux
        ↓
AFTERHYPERPOLARIZATION
        ↓
K+ channels close
        ↓
RESTING MEMBRANE BEHAVIOR
```

---

# 43. The most useful conceptual summary

Instead of memorizing:

> Na+ makes the membrane positive and K+ makes it negative,

use the more general rule:

\[
\boxed{
\text{Opening an ion channel tends to move }
V_m
\text{ toward }
E_{\text{ion}}
}
\]

Therefore:

\[
\text{Na+ channels open}
\Rightarrow
V_m\rightarrow E_{Na}
\]

and:

\[
\text{K+ channels open}
\Rightarrow
V_m\rightarrow E_K
\]

The size and direction of ionic current depend on both:

\[
g_{\text{ion}}
\]

and:

\[
V_m-E_{\text{ion}}
\]

according to:

\[
\boxed{
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
}
\]

---

# 44. Common misconceptions

## Misconception 1

> The entire cytoplasm is strongly negatively charged.

### Correction

The bulk cytoplasm remains approximately electrically neutral.

Only a minute separation of charge immediately adjacent to the plasma membrane is required to generate membrane voltage.

---

## Misconception 2

> K+ enters the cell during repolarization.

### Correction

During the classical neuronal action potential, voltage-gated K+ channels open and K+ moves outward:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

The loss of positive intracellular charge repolarizes the membrane.

---

## Misconception 3

> The Na+/K+-ATPase produces rapid repolarization.

### Correction

Rapid repolarization is produced mainly by:

\[
\text{Na+ channel inactivation}
+
\text{K+ channel activation}
\]

The Na+/K+-ATPase maintains Na+ and K+ concentration gradients over longer periods.

---

## Misconception 4

> The neuron must restore every Na+ and K+ ion after each action potential.

### Correction

Only a minute fraction of the total cellular Na+ and K+ crosses during one action potential.

Bulk ion concentrations change very little.

---

## Misconception 5

> Na+ channels open first, close completely, and only then do K+ channels begin opening.

### Correction

Na+ and K+ conductance changes overlap.

Voltage-gated K+ channels begin activating during depolarization but generally do so more slowly than the Na+ channels.

---

## Misconception 6

> If an ion channel is open, there must be ionic current.

### Correction

An open channel does not guarantee net current.

At:

\[
V_m=E_{\text{ion}}
\]

the driving force is zero:

\[
V_m-E_{\text{ion}}=0
\]

and therefore:

\[
I_{\text{ion}}=0
\]

even if the channel is open.

---

## Misconception 7

> Equilibrium potential means that ions stop moving.

### Correction

Individual ions may continue moving randomly in both directions.

At equilibrium, there is no net movement of that ion across the membrane.

---

## Misconception 8

> Resistance, conductance, and permeability are identical.

### Correction

They are related but distinct concepts.

Resistance describes opposition to current.

Conductance is the reciprocal of resistance.

Permeability describes how readily a substance crosses a membrane.

---

# 45. Concept-check questions

## Question 1

A neuron has:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_{Na}=+60\text{ mV}
\]

Voltage-gated Na+ channels suddenly open.

What happens to Na+?

### Answer

Na+ moves into the cell.

### Explanation

The membrane is far below \(E_{Na}\), producing a strong inward electrochemical driving force.

The resulting inward positive current depolarizes the membrane.

---

## Question 2

A neuron has:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

If additional K+ channels open, in which direction does K+ tend to move?

### Answer

K+ tends to move outward.

### Explanation

The membrane potential is more positive than \(E_K\).

Opening K+ channels therefore tends to move:

\[
V_m
\]

toward:

\[
E_K
\]

by allowing K+ to leave.

---

## Question 3

Suppose:

\[
V_m=E_{Na}=+60\text{ mV}
\]

and many Na+ channels are open.

What is the net Na+ current?

### Answer

Approximately zero.

### Explanation

The driving force is:

\[
V_m-E_{Na}
=
60-60
=
0
\]

Therefore:

\[
I_{Na}=g_{Na}(0)=0
\]

---

## Question 4

Why does membrane voltage not normally change instantaneously when an ion channel opens?

### Answer

The membrane behaves as a capacitor.

Changing its voltage requires redistribution of electrical charge across the membrane.

The rate of voltage change therefore depends on capacitance, membrane resistance, and the available current.

---

## Question 5

What primarily causes the falling phase of a typical neuronal action potential?

### Answer

The combination of:

1. Na+ channel inactivation;
2. increased K+ conductance.

The Na+/K+-ATPase is not responsible for the millisecond-scale falling phase.

---

# 46. Worked calculation exercises

## Exercise 1: Na+ driving force at rest

Given:

\[
V_m=-65\text{ mV}
\]

\[
E_{Na}=+55\text{ mV}
\]

Calculate:

\[
V_m-E_{Na}
\]

### Solution

\[
-65-(+55)
=
-120\text{ mV}
\]

The negative sign corresponds to an inward Na+ current under the usual electrophysiological sign convention.

---

## Exercise 2: K+ driving force at rest

Given:

\[
V_m=-65\text{ mV}
\]

\[
E_K=-85\text{ mV}
\]

Calculate:

\[
V_m-E_K
\]

### Solution

\[
-65-(-85)
=
+20\text{ mV}
\]

This corresponds to an outward K+ current for a positive ion.

---

## Exercise 3: K+ driving force during an action potential

Suppose:

\[
V_m=+25\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

Calculate the K+ driving force.

### Solution

\[
V_m-E_K
=
25-(-90)
\]

\[
=+115\text{ mV}
\]

There is therefore a very strong outward driving force for K+.

---

## Exercise 4: Reversal of Na+ current

Suppose:

\[
E_{Na}=+60\text{ mV}
\]

Predict the net direction of Na+ movement at each membrane potential.

### A.

\[
V_m=-70\text{ mV}
\]

Answer:

Na+ moves inward.

### B.

\[
V_m=+30\text{ mV}
\]

Answer:

Na+ still moves inward, but with a smaller driving force.

### C.

\[
V_m=+60\text{ mV}
\]

Answer:

No net Na+ movement.

### D.

\[
V_m=+80\text{ mV}
\]

Answer:

Na+ moves outward.

---

# 47. Application exercises

## Exercise 5: Blocking voltage-gated Na+ channels

A toxin blocks most voltage-gated Na+ channels.

Predict the effect on the action potential.

### Expected answer

The rapid depolarizing phase would be greatly reduced or abolished.

Without sufficient Na+ conductance, the regenerative positive-feedback process required for a normal action potential cannot occur.

---

## Exercise 6: Blocking voltage-gated K+ channels

A drug blocks many of the delayed voltage-gated K+ channels.

Predict what would happen to the action potential.

### Expected answer

Repolarization would become slower and the action potential would generally become broader.

Afterhyperpolarization would also be reduced or altered.

Other K+ currents may still contribute depending on the cell type.

---

## Exercise 7: Increasing extracellular K+

Suppose extracellular K+ concentration increases substantially.

Would \(E_K\) become more negative or less negative?

### Expected answer

\(E_K\) would become less negative.

The concentration difference between intracellular and extracellular K+ would become smaller.

Consequently, the chemical tendency for K+ to leave the cell would decrease.

This would generally tend to depolarize the resting membrane.

---

## Exercise 8: Membrane capacitance

Two cells have identical ion channels and membrane resistance.

Cell A has twice the membrane capacitance of Cell B.

If the same current is applied to both cells, which cell's membrane voltage will change more slowly?

### Expected answer

Cell A.

A larger capacitance means more charge must be transferred to produce the same change in voltage.

---

# 48. Multiple-choice questions

## MCQ 1

Which event is primarily responsible for the rapid depolarization of a typical neuronal action potential?

A. K+ influx  
B. Na+ influx  
C. Na+ efflux through the Na+/K+-ATPase  
D. Cl- efflux

### Correct answer

B. Na+ influx

### Explanation

Opening of voltage-gated Na+ channels greatly increases Na+ conductance.

Na+ enters because the membrane potential is far below \(E_{Na}\).

---

## MCQ 2

Which event contributes most directly to rapid repolarization?

A. Na+/K+-ATPase acceleration  
B. K+ influx  
C. Na+ channel inactivation and K+ efflux  
D. Ca2+ entry

### Correct answer

C. Na+ channel inactivation and K+ efflux

---

## MCQ 3

At the equilibrium potential of an ion:

A. all channels for that ion are closed;  
B. the ion concentration is identical on both sides of the membrane;  
C. there is no net movement of that ion;  
D. the membrane contains no electrical charge.

### Correct answer

C. there is no net movement of that ion.

---

## MCQ 4

The lipid bilayer behaves electrically most like:

A. a battery;  
B. a capacitor;  
C. a voltage-gated channel;  
D. an ATPase.

### Correct answer

B. a capacitor.

---

## MCQ 5

If many K+ channels open, membrane voltage tends to move toward:

A. \(E_{Na}\);  
B. 0 mV;  
C. \(E_K\);  
D. the threshold voltage.

### Correct answer

C. \(E_K\).

---

## MCQ 6

Which statement about the Na+/K+-ATPase is most accurate?

A. It generates the rapid rising phase of the action potential.  
B. It generates rapid repolarization.  
C. It maintains Na+ and K+ concentration gradients over time.  
D. It opens only after an action potential.

### Correct answer

C. It maintains Na+ and K+ concentration gradients over time.

---

# 49. Higher-order reasoning questions

## Question 1

A membrane is at:

\[
V_m=-70\text{ mV}
\]

Opening one class of channels causes the membrane to move toward:

\[
-90\text{ mV}
\]

What ion is likely to be responsible?

### Expected reasoning

A likely candidate is K+, because a typical K+ equilibrium potential is near:

\[
E_K\approx-90\text{ mV}
\]

Opening K+ channels drives \(V_m\) toward \(E_K\).

---

## Question 2

A membrane is experimentally held at:

\[
+60\text{ mV}
\]

Opening additional Na+ channels produces almost no net Na+ current.

Why?

### Expected reasoning

The membrane is near:

\[
E_{Na}
\]

Therefore:

\[
V_m-E_{Na}\approx0
\]

and the electrochemical driving force for Na+ is minimal.

---

## Question 3

A student says:

> "The Na+/K+ pump removes the Na+ that entered during the action potential, and that makes the voltage negative again."

Identify the error and provide a better explanation.

### Expected answer

The pump does maintain Na+ and K+ gradients, but it does not produce the rapid falling phase of the action potential.

Rapid repolarization occurs because voltage-gated Na+ channels inactivate while voltage-gated K+ channels open.

K+ then leaves the cell, carrying positive charge outward.

---

# 50. Interactive simulation ideas

These are suggestions for implementation by the website rather than student-facing scientific claims.

## Simulation 1: Ion-channel sliders

Provide sliders for:

- \(g_{Na}\)
- \(g_K\)
- \(g_{Cl}\)

Display:

- \(V_m\)
- \(E_{Na}\)
- \(E_K\)
- \(E_{Cl}\)

Allow students to observe how changing conductance shifts membrane voltage toward different equilibrium potentials.

---

## Simulation 2: Driving-force calculator

Allow students to enter:

- \(V_m\)
- \(E_{\text{ion}}\)

Calculate:

\[
V_m-E_{\text{ion}}
\]

Ask students to predict the current direction before showing the answer.

---

## Simulation 3: Action-potential timeline

Display synchronized curves for:

1. membrane voltage;
2. \(g_{Na}\) or \(P_{Na}\);
3. \(g_K\) or \(P_K\).

Students should be able to move a time cursor across the graph and see:

- which channels are open;
- direction of Na+ movement;
- direction of K+ movement;
- whether the membrane is depolarizing or repolarizing;
- approximate driving force for each ion.

---

## Simulation 4: Build an action potential

Give students control over:

- Na+ activation speed;
- Na+ inactivation speed;
- K+ activation delay;
- K+ closing speed.

Ask them to predict how each change alters:

- rising phase;
- peak;
- falling phase;
- duration;
- afterhyperpolarization.

---

# 51. Suggested diagram: membrane as capacitor

The student-facing figure should show:

```text
Extracellular fluid
mobile ions
+ + + + + + +

========================
hydrophobic lipid bilayer
electrical insulator
========================

- - - - - - -
mobile ions
Intracellular fluid
```

Labels should identify:

- extracellular conductor;
- intracellular conductor;
- lipid dielectric;
- separated charge;
- membrane voltage.

Important visual note:

The figure should make clear that the charge imbalance is localized near the membrane and should not imply that the entire cytoplasm or extracellular fluid has a large net charge.

---

# 52. Suggested diagram: equivalent electrical circuit

Include:

- membrane capacitor \(C_m\);
- Na+ resistance or conductance;
- K+ resistance or conductance;
- Cl- resistance or conductance;
- \(E_{Na}\);
- \(E_K\);
- \(E_{Cl}\).

Possible labeling:

```text
Lipid bilayer      → Cm
Na+ channels       → RNa or gNa
K+ channels        → RK or gK
Cl- channels       → RCl or gCl
Na+ gradient       → ENa
K+ gradient        → EK
Cl- gradient       → ECl
```

---

# 53. Suggested diagram: action-potential mechanism

Display three synchronized curves:

### Top

Membrane potential:

\[
V_m
\]

### Middle

Na+ permeability or conductance:

\[
P_{Na}
\]

or:

\[
g_{Na}
\]

### Bottom

K+ permeability or conductance:

\[
P_K
\]

or:

\[
g_K
\]

Annotate:

- threshold;
- Na+ channel activation;
- rapid Na+ influx;
- Na+ channel inactivation;
- delayed K+ channel activation;
- K+ efflux;
- repolarization;
- afterhyperpolarization.

---

# 54. Instructor notes

## Teaching emphasis 1

Students frequently imagine membrane potential as the entire intracellular solution becoming negatively charged.

Repeatedly emphasize that membrane voltage requires only a tiny charge separation immediately adjacent to the membrane.

---

## Teaching emphasis 2

Avoid teaching the Na+/K+-ATPase as the mechanism of rapid repolarization.

A useful distinction is:

> Channels create rapid voltage changes. Pumps maintain long-term gradients.

---

## Teaching emphasis 3

Emphasize equilibrium potential as a target voltage.

A highly useful phrase is:

> Opening an ion channel tends to move membrane voltage toward that ion's equilibrium potential.

This statement generalizes better than memorizing individual ion directions.

---

## Teaching emphasis 4

Before introducing the full Nernst equation, students should understand conceptually that \(E_{\text{ion}}\) is the voltage at which electrical and chemical forces exactly balance.

This makes the Nernst equation an answer to a physiological question rather than an arbitrary mathematical expression.

---

## Teaching emphasis 5

When introducing:

\[
I_{\text{ion}}=g_{\text{ion}}(V_m-E_{\text{ion}})
\]

separate the two components explicitly:

\[
g_{\text{ion}}
\]

answers:

> How open is the pathway?

while:

\[
V_m-E_{\text{ion}}
\]

answers:

> How strongly is the ion being driven?

Students should understand that either factor can limit current.

---

# 55. Short student summary

The plasma membrane separates two conductive ionic solutions with a thin insulating lipid bilayer.

Because opposite charges can accumulate on the two sides of the membrane without freely crossing it, the membrane behaves as a capacitor.

At rest, the intracellular surface is slightly negative relative to the extracellular surface.

This voltage depends strongly on selective ion permeability, especially K+ permeability.

Each ion has an equilibrium potential:

\[
E_{\text{ion}}
\]

Opening a channel tends to move membrane voltage toward that value.

Ionic current depends on both conductance and driving force:

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

During an action potential:

\[
\text{Na+ channels open}
\rightarrow
Na^+\text{ influx}
\rightarrow
\text{depolarization}
\]

followed by:

\[
\text{Na+ channel inactivation}
+
\text{K+ channel opening}
\rightarrow
K^+\text{ efflux}
\rightarrow
\text{repolarization}
\]

Continued K+ conductance can briefly produce afterhyperpolarization.

The Na+/K+-ATPase maintains the Na+ and K+ concentration gradients over time but does not produce the rapid repolarization of an individual action potential.

---

# 56. Essential equations

## Capacitor

\[
Q=CV
\]

\[
V=\frac{Q}{C}
\]

## Ideal capacitance relationship

\[
C=\frac{\varepsilon A}{d}
\]

## Conductance and resistance

\[
g=\frac{1}{R}
\]

## Ionic driving force

\[
V_m-E_{\text{ion}}
\]

## Ionic current

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

## Membrane time constant

\[
\tau=R_mC_m
\]

---

# 57. Essential values for conceptual exercises

These are approximate teaching values and should not be presented as universal constants.

\[
V_{\text{rest}}\approx-70\text{ mV}
\]

\[
E_{Na}\approx+60\text{ mV}
\]

\[
E_K\approx-90\text{ mV}
\]

Typical action-potential peak:

\[
V_m\approx+30\text{ mV}
\]

Approximate biological membrane specific capacitance:

\[
C_m\approx1\ \mu\text{F}/\text{cm}^2
\]

Actual values vary among cell types and physiological conditions.

---

# 58. Terminology

### Afterhyperpolarization

Temporary period following an action potential during which membrane potential becomes more negative than its resting value.

### Capacitance

Ability to store separated electrical charge.

### Conductance

Measure of how easily electrical current flows.

\[
g=\frac{1}{R}
\]

### Depolarization

A change in membrane potential toward a less negative or more positive value.

### Driving force

Difference between membrane potential and an ion's equilibrium potential:

\[
V_m-E_{\text{ion}}
\]

### Equilibrium potential

Membrane voltage at which electrical and chemical forces on a particular ion balance, producing no net movement of that ion.

### Hyperpolarization

A change in membrane potential toward a more negative value.

### Membrane potential

Electrical potential difference between the intracellular and extracellular sides of the membrane.

\[
V_m=V_{\text{inside}}-V_{\text{outside}}
\]

### Permeability

Measure of how readily a substance can cross a membrane.

### Repolarization

Return of membrane potential toward a negative value following depolarization.

### Resistance

Opposition to electrical current.

### Reversal potential

Voltage at which net current through a particular ionic pathway reverses direction.

For a perfectly ion-selective passive channel, the reversal potential corresponds to that ion's equilibrium potential.

### Threshold

Membrane potential at which regenerative activation of voltage-gated channels becomes sufficient to initiate an action potential.

---

# 59. Next concepts

Recommended continuation of this unit:

1. The Nernst equation
2. Calculating ion equilibrium potentials
3. The Goldman-Hodgkin-Katz equation
4. Resting membrane potential as a weighted permeability problem
5. Voltage-gated channel structure and gating
6. Absolute and relative refractory periods
7. Propagation of action potentials
8. Cable properties of axons
9. Myelination and saltatory conduction
10. Synaptic potentials and temporal/spatial summation
```
