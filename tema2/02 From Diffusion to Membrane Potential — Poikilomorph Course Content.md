```markdown
---
id: diffusion-to-membrane-potential
title: From Diffusion to Membrane Potential
course: Animal Physiology
unit: Excitable Cells
topic: Electrochemical Gradients
level: undergraduate
language: en
status: draft
order: 5
source_of_truth: true
bloom:
  - understand
  - apply
  - analyze
prerequisites:
  - membrane-electrical-properties-action-potentials
keywords:
  - diffusion
  - Fick's law
  - Nernst equation
  - equilibrium potential
  - reversal potential
  - electrochemical gradient
  - Gibbs-Donnan equilibrium
  - Goldman-Hodgkin-Katz equation
  - driving force
  - membrane potential
  - sodium
  - potassium
  - ionic current
---

# From Diffusion to Membrane Potential

## Learning objectives

After completing this section, students should be able to:

1. Explain how Fick's law, the Nernst equation, Gibbs-Donnan equilibrium, and the Goldman-Hodgkin-Katz equation address different aspects of membrane physiology.
2. Explain the physical meaning of an ion's equilibrium potential.
3. Predict the sign of an equilibrium potential from an ion concentration gradient.
4. Use the Nernst equation to calculate approximate equilibrium potentials.
5. Relate the Nernst equilibrium potential to electrochemical driving force.
6. Explain why an ion may stop showing net flux even though its concentrations differ across a membrane.
7. Distinguish chemical and electrical components of an electrochemical gradient.
8. Explain how Fick's law provides the diffusion component underlying ionic movement.
9. Explain conceptually why impermeant intracellular anions lead to Gibbs-Donnan effects.
10. Explain why the Goldman-Hodgkin-Katz equation is needed when a membrane is permeable to several ions simultaneously.
11. Connect ion concentrations, equilibrium potentials, membrane conductances, and ionic currents into a single conceptual framework.

---

# 1. How the major membrane equations fit together

Several equations are used to describe ion movement and membrane voltage.

They do not provide competing explanations.

Instead, each answers a different physiological question.

The principal relationships considered here are:

- Fick's law;
- the Nernst equation;
- Gibbs-Donnan equilibrium;
- the Goldman-Hodgkin-Katz equation;
- the conductance form of Ohm's law used for ionic currents.

A useful conceptual progression is:

\[
\boxed{
\text{Fick}
\rightarrow
\text{Nernst}
\rightarrow
\text{Gibbs-Donnan}
\rightarrow
\text{Goldman-Hodgkin-Katz}
}
\]

However, when studying action potentials, the Nernst equation is often the most useful starting point because the concepts:

\[
E_{Na}
\]

\[
E_K
\]

and:

\[
V_m-E_{\text{ion}}
\]

have already appeared in the description of membrane currents.

---

# 2. Equations already encountered

Several equations used in membrane physiology describe different physical properties.

## 2.1 Membrane capacitance

\[
Q=CV
\]

where:

- \(Q\) = separated electrical charge;
- \(C\) = membrane capacitance;
- \(V\) = membrane voltage.

This equation describes how charge separation across the lipid bilayer produces voltage.

---

## 2.2 Membrane time constant

\[
\tau=R_mC_m
\]

where:

- \(\tau\) = membrane time constant;
- \(R_m\) = membrane resistance;
- \(C_m\) = membrane capacitance.

This equation describes how quickly membrane voltage responds to an imposed current.

---

## 2.3 Resistance and conductance

\[
g=\frac{1}{R}
\]

where:

- \(g\) = conductance;
- \(R\) = resistance.

Opening ion channels increases conductance and decreases resistance.

---

## 2.4 Ionic current

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

where:

- \(I_{\text{ion}}\) = ionic current;
- \(g_{\text{ion}}\) = conductance for that ion;
- \(V_m\) = membrane potential;
- \(E_{\text{ion}}\) = equilibrium potential of the ion.

A central question therefore becomes:

> Where does \(E_{\text{ion}}\) come from?

The Nernst equation answers that question.

---

# 3. The physiological question answered by the Nernst equation

Consider K+ distributed across a membrane:

```text
Extracellular fluid
Low K+

-----------------------------
       K+-selective membrane
-----------------------------

High K+
Intracellular fluid
```

Because K+ concentration is greater inside the cell than outside, the concentration gradient favors:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

This is the chemical component of the driving force.

As K+ leaves, positive charge is lost from the intracellular side.

Negatively charged intracellular molecules remain behind.

The intracellular surface therefore becomes increasingly negative.

That negative voltage now attracts positively charged K+ inward.

Thus K+ simultaneously experiences:

\[
\boxed{
\text{chemical force outward}
}
\]

and:

\[
\boxed{
\text{electrical force inward}
}
\]

At some membrane voltage, these two forces become equal.

At that point:

\[
\text{chemical force outward}
=
\text{electrical force inward}
\]

and:

\[
\boxed{
\text{net K+ flux}=0
}
\]

The voltage at which this occurs is the equilibrium potential:

\[
\boxed{
E_K
}
\]

The Nernst equation calculates this voltage.

---

# 4. The Nernst equation

For a single ion:

\[
\boxed{
E_{\text{ion}}
=
\frac{RT}{zF}
\ln
\left(
\frac{[\text{ion}]_{\text{out}}}
{[\text{ion}]_{\text{in}}}
\right)
}
\]

where:

- \(E_{\text{ion}}\) = equilibrium potential;
- \(R\) = universal gas constant;
- \(T\) = absolute temperature;
- \(z\) = ionic valence;
- \(F\) = Faraday constant;
- \([\text{ion}]_{\text{out}}\) = extracellular ion concentration;
- \([\text{ion}]_{\text{in}}\) = intracellular ion concentration.

---

# 5. Meaning of the symbols in the Nernst equation

## 5.1 \(E_{\text{ion}}\)

\[
E_{\text{ion}}
\]

is the equilibrium potential of the ion.

It is the membrane voltage at which the chemical and electrical forces acting on that ion exactly balance.

Units are volts, although membrane potentials are usually expressed in millivolts:

\[
\text{mV}
\]

---

## 5.2 \(R\)

\[
R=8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}
\]

is the universal gas constant.

Its presence reflects the fact that concentration differences represent differences in chemical potential and therefore stored energy.

---

## 5.3 \(T\)

\[
T
\]

is absolute temperature in kelvin.

Conversion from degrees Celsius is:

\[
T(K)=T(^\circ C)+273.15
\]

Temperature affects the energetic consequences of molecular motion and therefore appears in the Nernst relationship.

---

## 5.4 \(z\)

\[
z
\]

is the charge or valence of the ion.

Examples:

\[
K^+:z=+1
\]

\[
Na^+:z=+1
\]

\[
Ca^{2+}:z=+2
\]

\[
Cl^-:z=-1
\]

The sign of \(z\) is particularly important when calculating equilibrium potentials for anions.

---

## 5.5 \(F\)

\[
F\approx96485\ \mathrm{C/mol}
\]

is Faraday's constant.

It relates the number of moles of electrical charge to electrical units.

It therefore connects chemical quantities of ions with electrical potential.

---

## 5.6 The concentration ratio

The term:

\[
\frac{[\text{ion}]_{\text{out}}}
{[\text{ion}]_{\text{in}}}
\]

represents the concentration gradient.

Conceptually, this is the most important part of the equation.

---

# 6. The Nernst equation without the constants

Before focusing on numerical calculations, the central idea can be expressed schematically as:

\[
\boxed{
E_{\text{ion}}
\propto
\ln
\left(
\frac{[\text{ion}]_{\text{out}}}
{[\text{ion}]_{\text{in}}}
\right)
}
\]

The physiological meaning is:

> The greater the concentration imbalance across the membrane, the greater the electrical voltage required to oppose diffusion.

Thus the Nernst potential represents the electrical force necessary to exactly counteract the ion's concentration gradient.

---

# 7. Approximate form for monovalent ions

At approximately mammalian body temperature, the Nernst equation for a monovalent cation can be written approximately as:

\[
\boxed{
E_{\text{ion}}
\approx
61.5\text{ mV}
\log_{10}
\left(
\frac{[\text{ion}]_{\text{out}}}
{[\text{ion}]_{\text{in}}}
\right)
}
\]

This simplified form is useful for conceptual calculations.

The numerical factor changes somewhat with temperature.

Therefore, 61.5 mV should not be treated as a universal constant.

---

# 8. Worked example: equilibrium potential of K+

Suppose:

\[
[K^+]_{\text{inside}}
=
140\text{ mM}
\]

and:

\[
[K^+]_{\text{outside}}
=
5\text{ mM}
\]

Using the approximate Nernst equation:

\[
E_K
=
61.5
\log_{10}
\left(
\frac{5}{140}
\right)
\]

First calculate the concentration ratio:

\[
\frac{5}{140}
\approx
0.0357
\]

Then:

\[
\log_{10}(0.0357)
\approx
-1.45
\]

Therefore:

\[
E_K
\approx
61.5(-1.45)
\]

\[
\boxed{
E_K\approx-89\text{ mV}
}
\]

This is the origin of the commonly used teaching approximation:

\[
E_K\approx-90\text{ mV}
\]

---

# 9. What does \(E_K=-89\text{ mV}\) mean physically?

The result does not merely provide a number.

It describes a physical balance.

Because:

\[
[K^+]_{\text{inside}}
>
[K^+]_{\text{outside}}
\]

the concentration gradient pushes K+ outward.

To exactly oppose that diffusion, the interior must become sufficiently negative to attract K+ inward.

At approximately:

\[
V_m=-89\text{ mV}
\]

the two forces balance:

\[
\text{chemical force outward}
=
\text{electrical force inward}
\]

Therefore:

\[
\boxed{
J_K^{\text{net}}=0
}
\]

where:

\[
J
\]

represents flux.

---

## Important clarification

Equilibrium does not mean individual K+ ions stop moving.

Individual ions may continue crossing the membrane in both directions.

The condition is:

\[
\boxed{
\text{net flux}=0
}
\]

The average movement in one direction is balanced by movement in the opposite direction.

---

# 10. Worked example: equilibrium potential of Na+

Suppose:

\[
[Na^+]_{\text{outside}}
=
145\text{ mM}
\]

and:

\[
[Na^+]_{\text{inside}}
=
15\text{ mM}
\]

Then:

\[
E_{Na}
=
61.5
\log_{10}
\left(
\frac{145}{15}
\right)
\]

The concentration ratio is:

\[
\frac{145}{15}
\approx
9.67
\]

and:

\[
\log_{10}(9.67)
\approx
0.985
\]

Therefore:

\[
E_{Na}
\approx
61.5(0.985)
\]

\[
\boxed{
E_{Na}\approx+61\text{ mV}
}
\]

This explains the commonly used approximation:

\[
E_{Na}\approx+60\text{ mV}
\]

---

# 11. Predicting the sign of the equilibrium potential

The sign of an equilibrium potential can often be predicted without calculation.

---

## 11.1 Potassium

Because:

\[
[K^+]_{\text{inside}}
\gg
[K^+]_{\text{outside}}
\]

K+ tends to diffuse outward.

To oppose this movement, the interior must attract K+ inward.

Since K+ is positively charged, the interior must become negative.

Therefore:

\[
\boxed{
E_K<0
}
\]

---

## 11.2 Sodium

Because:

\[
[Na^+]_{\text{outside}}
\gg
[Na^+]_{\text{inside}}
\]

Na+ tends to diffuse inward.

To oppose this movement, the interior must repel Na+ outward.

Since Na+ is positively charged, the interior must become positive.

Therefore:

\[
\boxed{
E_{Na}>0
}
\]

---

# 12. Connecting Nernst to ionic driving force

The ionic current equation introduced previously was:

\[
\boxed{
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
}
\]

The Nernst equation explains where:

\[
E_{\text{ion}}
\]

comes from.

The difference:

\[
\boxed{
V_m-E_{\text{ion}}
}
\]

is the electrochemical driving force.

Thus ion concentrations ultimately determine an equilibrium potential, and the difference between that equilibrium potential and the actual membrane voltage determines how strongly the ion is driven.

---

# 13. Worked example: Na+ driving force

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
=
-130\text{ mV}
\]

This represents a very large inward driving force for Na+.

If Na+ channels open:

\[
g_{Na}\uparrow
\]

and substantial inward Na+ current can occur.

---

# 14. Worked example: K+ driving force

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
=
+20\text{ mV}
\]

The K+ driving force is therefore outward but much smaller than the Na+ driving force at rest.

---

# 15. The complete chain from concentration to current

The relationships can be summarized as:

\[
\boxed{
\text{ion concentrations}
}
\]

\[
\Downarrow
\]

\[
\boxed{
\text{Nernst equation}
}
\]

\[
\Downarrow
\]

\[
\boxed{
E_{\text{ion}}
}
\]

\[
\Downarrow
\]

compare with:

\[
V_m
\]

to obtain:

\[
\boxed{
V_m-E_{\text{ion}}
}
\]

\[
\Downarrow
\]

multiply by:

\[
g_{\text{ion}}
\]

to obtain:

\[
\boxed{
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
}
\]

Thus:

> Concentration gradients determine equilibrium potentials; equilibrium potentials and membrane voltage determine driving force; driving force and conductance determine ionic current.

---

# 16. What happens when \(V_m=E_{\text{ion}}\)?

If:

\[
V_m=E_{\text{ion}}
\]

then:

\[
V_m-E_{\text{ion}}=0
\]

Substituting into:

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

gives:

\[
I_{\text{ion}}
=
g_{\text{ion}}(0)
\]

and therefore:

\[
\boxed{
I_{\text{ion}}=0
}
\]

This remains true even if the channels are open.

Thus an open channel does not necessarily imply net ionic current.

---

# 17. Thought experiment: a membrane permeable only to K+

Imagine a membrane initially permeable only to K+.

Suppose:

\[
[K^+]_{\text{inside}}
\gg
[K^+]_{\text{outside}}
\]

and:

\[
E_K\approx-90\text{ mV}
\]

---

## At \(V_m=0\text{ mV}\)

There is little electrical opposition to the concentration gradient.

K+ strongly tends to leave:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

---

## At \(V_m=-30\text{ mV}\)

The negative intracellular voltage begins attracting K+ inward.

However, the concentration gradient still dominates.

Net K+ movement remains outward.

---

## At \(V_m=-70\text{ mV}\)

The electrical force opposing K+ exit is stronger.

K+ still tends to leave, but less strongly.

---

## At \(V_m=-90\text{ mV}\)

The membrane is approximately at:

\[
E_K
\]

The electrical and chemical forces balance.

Therefore:

\[
\boxed{
\text{net K+ flux}=0
}
\]

---

## At \(V_m=-110\text{ mV}\)

The intracellular voltage is now more negative than:

\[
E_K
\]

The electrical attraction inward becomes stronger than the concentration gradient outward.

K+ therefore tends to move inward:

\[
K^+_{\text{outside}}
\rightarrow
K^+_{\text{inside}}
\]

This reversal of current direction explains the term:

\[
\boxed{
\text{reversal potential}
}
\]

---

# 18. Nernst and the action potential

The Nernst equation provides the equilibrium potentials that help explain the direction of membrane voltage changes during an action potential.

At rest:

\[
V_m\approx-70\text{ mV}
\]

while:

\[
E_{Na}\approx+60\text{ mV}
\]

When voltage-gated Na+ channels open:

\[
g_{Na}\uparrow
\]

the membrane potential is driven toward:

\[
E_{Na}
\]

Therefore:

\[
V_m
\]

rapidly becomes less negative and then positive.

---

Later:

\[
g_{Na}\downarrow
\]

and:

\[
g_K\uparrow
\]

Because:

\[
E_K\approx-90\text{ mV}
\]

the membrane is now driven toward:

\[
E_K
\]

and repolarization occurs.

Thus the action potential can be understood in terms of changing conductances:

\[
\boxed{
g_{Na}\uparrow
\Rightarrow
V_m\rightarrow E_{Na}
}
\]

followed by:

\[
\boxed{
g_K\uparrow
\Rightarrow
V_m\rightarrow E_K
}
\]

---

# 19. Why this is more useful than memorizing ion directions

A simplified statement is:

> Na+ enters during depolarization and K+ leaves during repolarization.

This is generally correct for a classical neuronal action potential.

However, the deeper and more general rule is:

\[
\boxed{
\text{Opening an ion channel tends to move }
V_m
\text{ toward }
E_{\text{ion}}
}
\]

The direction of ionic movement depends on where:

\[
V_m
\]

lies relative to:

\[
E_{\text{ion}}
\]

Thus K+ does not intrinsically "make voltage negative," nor does Na+ intrinsically "make voltage positive."

Their effects depend on electrochemical driving force.

---

# 20. Where does Fick's law fit?

Fick's first law describes diffusion caused by a concentration gradient.

A simplified one-dimensional form is:

\[
\boxed{
J=-D\frac{dC}{dx}
}
\]

where:

- \(J\) = flux;
- \(D\) = diffusion coefficient;
- \(C\) = concentration;
- \(x\) = distance.

---

# 21. Meaning of Fick's law

The essential idea is:

> Molecules diffuse from regions of high concentration toward regions of low concentration.

The minus sign indicates that net diffusion occurs down the concentration gradient.

Thus if:

\[
[K^+]_{\text{inside}}
>
[K^+]_{\text{outside}}
\]

Fick's law predicts a tendency for K+ to diffuse outward.

Similarly, if:

\[
[Na^+]_{\text{outside}}
>
[Na^+]_{\text{inside}}
\]

Fick's law predicts a tendency for Na+ to diffuse inward.

---

# 22. Why Fick alone is insufficient for ions

For electrically neutral molecules, concentration gradients may be sufficient to describe diffusion.

Ions are different because they carry electrical charge.

An ion therefore responds to:

1. a concentration gradient;
2. an electrical gradient.

Thus ionic movement depends on the combined:

\[
\boxed{
\text{electrochemical gradient}
}
\]

Fick describes the concentration-driven component.

The Nernst equation identifies the voltage at which the electrical component exactly balances the chemical component.

---

# 23. Conceptual relationship between Fick and Nernst

A useful progression is:

\[
\boxed{
\text{Fick: concentration differences cause diffusion}
}
\]

\[
\Downarrow
\]

For an ion, that diffusion separates electrical charge.

\[
\Downarrow
\]

An electrical gradient develops.

\[
\Downarrow
\]

Eventually:

\[
\boxed{
\text{electrical force}
=
\text{chemical force}
}
\]

\[
\Downarrow
\]

\[
\boxed{
\text{Nernst equilibrium}
}
\]

Thus Nernst can be viewed as describing the electrical condition required to counterbalance diffusion of a particular ion.

---

# 24. Where does Gibbs-Donnan equilibrium fit?

The Gibbs-Donnan effect becomes important when a membrane separates charged substances and some of those charged particles cannot cross the membrane.

Inside cells, large negatively charged molecules are often relatively impermeant.

These can be represented as:

\[
A^-
\]

Examples include:

- proteins;
- nucleic acids;
- phosphorylated compounds;
- other large organic anions.

---

# 25. Why impermeant ions matter

Imagine a membrane permeable to small ions but impermeable to a large intracellular anion:

\[
A^-
\]

The permeant ions can redistribute.

The trapped anion cannot.

This means the permeant ions cannot simply distribute equally on both sides without regard to charge.

Their distribution is constrained by:

1. diffusion;
2. electrical forces;
3. approximate electroneutrality;
4. the presence of the trapped charged molecules.

This produces the Gibbs-Donnan distribution.

---

# 26. Physiological consequences of Gibbs-Donnan effects

The presence of impermeant charged molecules can contribute to:

- unequal distributions of permeant ions;
- membrane electrical potential;
- osmotic differences;
- tendencies for water to enter cells.

Thus the negatively charged intracellular macromolecules introduced earlier are relevant not only to membrane charge but also to osmotic and ionic equilibrium.

---

## Important note

Living cells are generally not at a simple passive Donnan equilibrium.

Active ion transport, especially the Na+/K+-ATPase and other transporters, continually maintains ion distributions away from passive equilibrium.

The Donnan concept nevertheless helps explain why impermeant intracellular charges influence ion distribution and osmotic behavior.

---

# 27. Where does the Goldman-Hodgkin-Katz equation fit?

The Nernst equation answers:

> What is the equilibrium potential for one particular ion?

Real biological membranes are usually permeable to several ions at the same time.

For example, a resting neuronal membrane may have appreciable permeability to:

\[
K^+
\]

\[
Na^+
\]

and:

\[
Cl^-
\]

These permeabilities are not equal.

Therefore the actual membrane potential cannot generally be represented by only:

\[
E_K
\]

or only:

\[
E_{Na}
\]

or only:

\[
E_{Cl}
\]

---

# 28. The question answered by Goldman-Hodgkin-Katz

The Goldman-Hodgkin-Katz voltage equation asks:

> Given several permeant ions with different concentration gradients and different membrane permeabilities, what membrane potential results?

Schematically:

\[
\boxed{
V_m
=
f(
[K],
[Na],
[Cl],
P_K,
P_{Na},
P_{Cl}
)
}
\]

Thus the equation combines:

- ion concentration gradients;
- relative membrane permeabilities.

---

# 29. Why the resting membrane potential is not exactly \(E_K\)

Suppose:

\[
E_K\approx-90\text{ mV}
\]

but:

\[
V_{\text{rest}}\approx-70\text{ mV}
\]

Why does the resting membrane not simply sit at -90 mV?

Because the membrane is not exclusively permeable to K+.

There is also some permeability to ions such as Na+ and Cl-.

Na+ tends to pull:

\[
V_m
\]

toward:

\[
E_{Na}
\]

while K+ tends to pull:

\[
V_m
\]

toward:

\[
E_K
\]

The actual membrane voltage reflects the combined influence of these ions weighted by their relative permeabilities.

That is the type of problem addressed by the Goldman-Hodgkin-Katz equation.

---

# 30. Conceptual comparison of the major equations

## Fick's law

### Question

Why does a substance diffuse?

### Main variable

Concentration gradient.

### Core idea

\[
\boxed{
\text{high concentration}
\rightarrow
\text{low concentration}
}
\]

---

## Nernst equation

### Question

What electrical voltage exactly balances the concentration gradient of one ion?

### Main variables

- concentration ratio;
- ionic charge;
- temperature.

### Result

\[
E_{\text{ion}}
\]

---

## Gibbs-Donnan equilibrium

### Question

How do permeant ions redistribute when some charged molecules cannot cross the membrane?

### Main concepts

- trapped ions;
- electroneutrality;
- ion redistribution;
- osmotic consequences.

---

## Goldman-Hodgkin-Katz equation

### Question

What membrane potential results when several ions with different permeabilities contribute simultaneously?

### Main variables

- ion concentrations;
- relative permeabilities.

### Result

\[
V_m
\]

---

## Conductance equation

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

### Question

Given the membrane potential, equilibrium potential, and conductance, how much ionic current flows?

### Main variables

- conductance;
- driving force.

### Result

\[
I_{\text{ion}}
\]

---

# 31. Complete conceptual map

The major ideas can be connected as follows:

```text
CONCENTRATION DIFFERENCE
        |
        v
     FICK'S LAW
        |
        | concentration gradient drives diffusion
        v
For ions, charge separation develops
        |
        v
Electrical gradient opposes or assists diffusion
        |
        v
   NERNST EQUATION
        |
        | gives equilibrium potential
        v
      Eion
        |
        | compare with actual membrane voltage
        v
     Vm - Eion
        |
        | electrochemical driving force
        v
Multiply by membrane conductance
        |
        v
Iion = gion(Vm - Eion)
```

A second branch is:

```text
IMPERMEANT CHARGED MOLECULES
        |
        v
 GIBBS-DONNAN EFFECTS
        |
        +--> altered permeant-ion distributions
        |
        +--> electrical effects
        |
        +--> osmotic effects
```

And for a real membrane permeable to multiple ions:

```text
[K], [Na], [Cl], ...
+
PK, PNa, PCl, ...
        |
        v
GOLDMAN-HODGKIN-KATZ
        |
        v
ACTUAL MEMBRANE POTENTIAL
```

---

# 32. A compact hierarchy of questions

The equations can be remembered by the questions they answer.

### Fick

> Where will molecules diffuse because of concentration differences?

### Nernst

> For one ion, what voltage would exactly stop its net diffusion?

### Gibbs-Donnan

> What happens when some ions can cross but charged macromolecules are trapped?

### Goldman-Hodgkin-Katz

> What voltage results when several ions cross the membrane with different permeabilities?

### Ionic current equation

> At the current membrane voltage, how much current actually flows through the available channels?

---

# 33. Common misconceptions

## Misconception 1

> Fick, Nernst, Donnan, and Goldman-Hodgkin-Katz are alternative equations for calculating the same thing.

### Correction

They describe different aspects of membrane transport and electrophysiology.

Fick describes diffusion.

Nernst calculates the equilibrium potential for one ion.

Donnan describes ion distribution in the presence of impermeant charged species.

Goldman-Hodgkin-Katz estimates membrane voltage when several permeant ions contribute simultaneously.

---

## Misconception 2

> At the Nernst potential, the ion stops moving.

### Correction

Individual ions may continue crossing the membrane in both directions.

At equilibrium:

\[
\boxed{
\text{net flux}=0
}
\]

---

## Misconception 3

> A concentration gradient alone determines ion movement.

### Correction

For ions, both concentration and electrical gradients matter.

The relevant force is the:

\[
\boxed{
\text{electrochemical gradient}
}
\]

---

## Misconception 4

> If an ion channel is open, current must flow.

### Correction

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

even if conductance is high.

---

## Misconception 5

> The resting membrane potential should equal \(E_K\) because K+ permeability dominates at rest.

### Correction

The resting membrane is usually most permeable to K+, so \(V_m\) lies relatively close to \(E_K\).

However, permeability to Na+, Cl-, and other ions prevents the resting potential from being identical to \(E_K\).

---

## Misconception 6

> The Gibbs-Donnan equilibrium completely describes ion distributions in a living cell.

### Correction

Living cells use pumps, cotransporters, exchangers, and channels to maintain ion concentrations away from a simple passive Donnan equilibrium.

Donnan effects nevertheless remain important for understanding the consequences of impermeant intracellular charges.

---

## Misconception 7

> \(E_{\text{ion}}\) is an experimentally chosen reference voltage.

### Correction

The equilibrium potential arises from the ion concentration gradient, temperature, and ionic charge.

It can be calculated using the Nernst equation.

---

# 34. Concept-check questions

## Question 1

A membrane is permeable only to K+.

The concentration of K+ is much greater inside than outside.

In which direction does the concentration gradient initially push K+?

### Answer

Outward:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

---

## Question 2

As K+ leaves the cell, why does continued K+ efflux become progressively more difficult?

### Answer

The intracellular surface becomes more negative.

This creates an electrical force attracting K+ back into the cell.

The electrical force increasingly opposes the chemical concentration gradient.

---

## Question 3

What does:

\[
E_K=-90\text{ mV}
\]

mean?

### Answer

At approximately -90 mV, the electrical force acting on K+ balances the chemical concentration gradient.

There is therefore no net K+ flux through open K+-selective channels.

---

## Question 4

Why is \(E_{Na}\) usually positive?

### Answer

Na+ concentration is usually much greater outside the cell.

Na+ therefore tends to enter.

A positive intracellular voltage is required to repel Na+ strongly enough to balance that inward chemical tendency.

---

## Question 5

Why is \(E_K\) usually negative?

### Answer

K+ concentration is usually much greater inside the cell.

K+ therefore tends to leave.

A negative intracellular voltage is required to attract K+ inward strongly enough to balance its outward concentration gradient.

---

# 35. Calculation exercises

## Exercise 1: Potassium equilibrium potential

Given:

\[
[K^+]_{\text{inside}}=140\text{ mM}
\]

\[
[K^+]_{\text{outside}}=5\text{ mM}
\]

and:

\[
E_K
\approx
61.5
\log_{10}
\left(
\frac{[K^+]_{\text{outside}}}
{[K^+]_{\text{inside}}}
\right)
\]

calculate \(E_K\).

### Solution

\[
E_K
=
61.5
\log_{10}
\left(
\frac{5}{140}
\right)
\]

\[
\frac{5}{140}=0.0357
\]

\[
\log_{10}(0.0357)\approx-1.45
\]

Therefore:

\[
E_K\approx61.5(-1.45)
\]

\[
\boxed{
E_K\approx-89\text{ mV}
}
\]

---

## Exercise 2: Sodium equilibrium potential

Given:

\[
[Na^+]_{\text{outside}}=145\text{ mM}
\]

\[
[Na^+]_{\text{inside}}=15\text{ mM}
\]

calculate \(E_{Na}\).

### Solution

\[
E_{Na}
=
61.5
\log_{10}
\left(
\frac{145}{15}
\right)
\]

\[
\frac{145}{15}\approx9.67
\]

\[
\log_{10}(9.67)\approx0.985
\]

Therefore:

\[
E_{Na}
\approx
61.5(0.985)
\]

\[
\boxed{
E_{Na}\approx+61\text{ mV}
}
\]

---

## Exercise 3: Na+ driving force

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_{Na}=+60\text{ mV}
\]

Calculate:

\[
V_m-E_{Na}
\]

### Solution

\[
-70-(+60)
=
-130\text{ mV}
\]

The driving force strongly favors inward Na+ current.

---

## Exercise 4: K+ driving force

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

Calculate:

\[
V_m-E_K
\]

### Solution

\[
-70-(-90)
=
+20\text{ mV}
\]

For K+, this corresponds to an outward driving force.

---

# 36. Prediction exercise: current direction around \(E_K\)

Assume:

\[
E_K=-90\text{ mV}
\]

Predict the net direction of K+ movement at each voltage.

## A. \(V_m=0\text{ mV}\)

### Answer

Strong outward K+ movement.

---

## B. \(V_m=-30\text{ mV}\)

### Answer

Outward K+ movement.

---

## C. \(V_m=-70\text{ mV}\)

### Answer

Outward K+ movement, but with a smaller driving force.

---

## D. \(V_m=-90\text{ mV}\)

### Answer

No net K+ movement.

---

## E. \(V_m=-110\text{ mV}\)

### Answer

Net K+ movement becomes inward.

---

# 37. Higher-order reasoning questions

## Question 1

A researcher increases extracellular K+ concentration while intracellular K+ remains approximately constant.

Would \(E_K\) become more negative or less negative?

### Expected reasoning

The concentration ratio:

\[
\frac{[K^+]_{\text{outside}}}
{[K^+]_{\text{inside}}}
\]

increases.

The ratio therefore becomes closer to 1.

Its logarithm becomes less negative.

Thus:

\[
\boxed{
E_K\text{ becomes less negative}
}
\]

---

## Question 2

Why does increasing extracellular K+ commonly depolarize a cell?

### Expected reasoning

Increasing extracellular K+ reduces the K+ concentration gradient.

This makes:

\[
E_K
\]

less negative.

Because the resting membrane potential is strongly influenced by K+ permeability, \(V_m\) also tends to become less negative.

---

## Question 3

Suppose a membrane has a very high Na+ conductance, but:

\[
V_m=E_{Na}
\]

Will a large Na+ current flow?

### Expected answer

No.

Although:

\[
g_{Na}
\]

is large, the driving force is:

\[
V_m-E_{Na}=0
\]

Therefore:

\[
I_{Na}=0
\]

---

## Question 4

Why can the Nernst equation not by itself calculate the resting membrane potential of a typical neuron?

### Expected answer

The Nernst equation describes the equilibrium potential of one ion at a time.

A real resting membrane is permeable to several ions simultaneously.

The actual membrane voltage therefore depends on the relative permeabilities and concentration gradients of several ions.

The Goldman-Hodgkin-Katz equation is better suited to that problem.

---

## Question 5

Why does Fick's law alone not adequately describe the movement of K+ across a neuronal membrane?

### Expected answer

Fick's law describes movement caused by a concentration gradient.

Because K+ carries electrical charge, its movement is also affected by membrane voltage.

Both chemical and electrical forces must therefore be considered.

---

# 38. Multiple-choice questions

## MCQ 1

The Nernst equation calculates:

A. membrane capacitance;  
B. diffusion coefficient;  
C. equilibrium potential for a particular ion;  
D. total membrane resistance.

### Correct answer

C. equilibrium potential for a particular ion.

---

## MCQ 2

At the equilibrium potential of an ion:

A. all channels for that ion close;  
B. the ion stops moving completely;  
C. electrical and chemical forces balance;  
D. intracellular and extracellular concentrations become identical.

### Correct answer

C. electrical and chemical forces balance.

---

## MCQ 3

Why is \(E_K\) normally negative?

A. K+ carries a negative charge.  
B. K+ is more concentrated outside the cell.  
C. K+ tends to diffuse outward and must be attracted inward by a negative intracellular voltage.  
D. K+ channels actively pump K+ outward.

### Correct answer

C.

---

## MCQ 4

Which equation most directly describes diffusion down a concentration gradient?

A. Nernst equation  
B. Fick's law  
C. Goldman-Hodgkin-Katz equation  
D. Ohm's law

### Correct answer

B. Fick's law.

---

## MCQ 5

Which concept is particularly relevant when large negatively charged intracellular molecules cannot cross the membrane?

A. Gibbs-Donnan equilibrium  
B. Membrane capacitance only  
C. Action-potential threshold  
D. Refractory period

### Correct answer

A. Gibbs-Donnan equilibrium.

---

## MCQ 6

Which equation is most appropriate for estimating membrane voltage when K+, Na+, and Cl- are all permeant?

A. Nernst equation for K+ alone  
B. Fick's law  
C. Goldman-Hodgkin-Katz equation  
D. \(Q=CV\)

### Correct answer

C. Goldman-Hodgkin-Katz equation.

---

# 39. Instructor notes

## Teaching emphasis 1

Present the Nernst equation first as a physiological question:

> What voltage would exactly stop the net diffusion of this ion?

Only after students understand that question should the full equation be emphasized.

---

## Teaching emphasis 2

Students should be able to predict the sign of \(E_K\) and \(E_{Na}\) before performing numerical calculations.

This demonstrates conceptual understanding rather than formula memorization.

---

## Teaching emphasis 3

Repeatedly distinguish:

\[
\text{chemical gradient}
\]

from:

\[
\text{electrical gradient}
\]

and then combine them under:

\[
\boxed{
\text{electrochemical gradient}
}
\]

---

## Teaching emphasis 4

When introducing:

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

connect each term explicitly to the preceding physiology:

\[
E_{\text{ion}}
\]

comes from concentration gradients through Nernst.

\[
V_m-E_{\text{ion}}
\]

is the driving force.

\[
g_{\text{ion}}
\]

depends on available/open ion channels.

---

## Teaching emphasis 5

Avoid presenting Nernst, Fick, Donnan, and GHK as isolated mathematical topics.

They are easier to understand when presented as successive answers to physiological questions.

---

# 40. Recommended conceptual sequence for instruction

A suitable teaching progression is:

## Step 1

Concentration gradients and diffusion.

Introduce Fick conceptually:

\[
J=-D\frac{dC}{dx}
\]

---

## Step 2

Add electrical charge.

Explain that ions respond to both chemical and electrical gradients.

---

## Step 3

Introduce Nernst.

Ask:

> What voltage exactly balances diffusion of one ion?

---

## Step 4

Return to driving force.

Use:

\[
V_m-E_{\text{ion}}
\]

to predict current direction.

---

## Step 5

Combine driving force with conductance.

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

---

## Step 6

Introduce impermeant intracellular ions.

Use this to motivate Gibbs-Donnan effects.

---

## Step 7

Introduce multiple simultaneously permeant ions.

Use this to motivate the Goldman-Hodgkin-Katz equation.

---

# 41. Short student summary

Fick's law explains why substances diffuse down concentration gradients.

For ions, however, concentration is only part of the story because ions also experience electrical forces.

The Nernst equation calculates the membrane voltage at which the electrical force on one ion exactly balances its concentration gradient:

\[
E_{\text{ion}}
=
\frac{RT}{zF}
\ln
\left(
\frac{[\text{ion}]_{\text{out}}}
{[\text{ion}]_{\text{in}}}
\right)
\]

For a typical neuron:

\[
E_K\approx-90\text{ mV}
\]

and:

\[
E_{Na}\approx+60\text{ mV}
\]

The difference:

\[
V_m-E_{\text{ion}}
\]

is the electrochemical driving force.

Combined with conductance:

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

it determines the ionic current.

Gibbs-Donnan effects become important when some charged molecules cannot cross the membrane.

The Goldman-Hodgkin-Katz equation extends the analysis to real membranes permeable to several ions at the same time.

---

# 42. Essential equations

## Fick's first law

\[
\boxed{
J=-D\frac{dC}{dx}
}
\]

## Nernst equation

\[
\boxed{
E_{\text{ion}}
=
\frac{RT}{zF}
\ln
\left(
\frac{[\text{ion}]_{\text{out}}}
{[\text{ion}]_{\text{in}}}
\right)
}
\]

## Approximate Nernst equation for a monovalent cation near 37 °C

\[
\boxed{
E_{\text{ion}}
\approx
61.5\text{ mV}
\log_{10}
\left(
\frac{[\text{ion}]_{\text{out}}}
{[\text{ion}]_{\text{in}}}
\right)
}
\]

## Electrochemical driving force

\[
\boxed{
V_m-E_{\text{ion}}
}
\]

## Ionic current

\[
\boxed{
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
}
\]

---

# 43. Essential conceptual relationships

\[
\boxed{
\text{concentration gradient}
\rightarrow
\text{diffusion}
}
\]

\[
\boxed{
\text{chemical gradient}
+
\text{electrical gradient}
=
\text{electrochemical gradient}
}
\]

\[
\boxed{
\text{Nernst}
\rightarrow
E_{\text{ion}}
}
\]

\[
\boxed{
V_m-E_{\text{ion}}
=
\text{driving force}
}
\]

\[
\boxed{
g_{\text{ion}}
\times
\text{driving force}
=
I_{\text{ion}}
}
\]

\[
\boxed{
\text{multiple ions + relative permeabilities}
\rightarrow
\text{Goldman-Hodgkin-Katz}
}
\]

---

# 44. Terminology

### Chemical gradient

Difference in concentration of a substance across space or across a membrane.

### Diffusion

Net movement of particles from regions of higher concentration toward regions of lower concentration as a consequence of random molecular motion.

### Electrochemical gradient

Combined effect of a concentration gradient and an electrical gradient on an ion.

### Equilibrium potential

Membrane voltage at which the electrical and chemical forces acting on a particular ion balance.

### Reversal potential

Voltage at which net current carried through a particular ionic pathway changes direction.

For an ideal ion-selective passive channel, it corresponds to the ion's Nernst equilibrium potential.

### Flux

Rate of movement of a substance through a defined area.

Commonly represented as:

\[
J
\]

### Gibbs-Donnan equilibrium

Passive distribution of diffusible ions across a semipermeable membrane when one or more charged species are confined to one side.

### Goldman-Hodgkin-Katz equation

Equation relating membrane voltage to concentration gradients and relative permeabilities of several ions.

### Nernst equation

Equation calculating the equilibrium potential of an ion from its concentration ratio, charge, and temperature.

### Driving force

Difference between membrane potential and an ion's equilibrium potential:

\[
V_m-E_{\text{ion}}
\]

---

# 45. Next concepts

Recommended continuation:

1. Derivation of the Nernst equation from chemical and electrical energy
2. Detailed interpretation of \(R\), \(T\), \(z\), and \(F\)
3. Logarithms and concentration ratios in the Nernst equation
4. Nernst calculations for Na+, K+, Cl-, and Ca2+
5. Fick's law and membrane diffusion in greater detail
6. Electrochemical potential and the Nernst-Planck equation
7. Gibbs-Donnan equilibrium
8. Osmotic consequences of impermeant intracellular anions
9. Goldman-Hodgkin-Katz voltage equation
10. Goldman current equation
11. Predicting resting membrane potential from ion permeabilities
12. Applying Nernst and GHK to action potentials
```