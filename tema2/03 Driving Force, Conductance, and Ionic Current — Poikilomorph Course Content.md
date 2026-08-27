```markdown
---
id: driving-force-conductance-current
title: Driving Force, Conductance, and Ionic Current
course: Animal Physiology
unit: Excitable Cells
topic: Electrophysiology
level: undergraduate
language: en
status: draft
order: 6
source_of_truth: true
bloom:
  - understand
  - apply
  - analyze
prerequisites:
  - diffusion-to-membrane-potential
keywords:
  - driving force
  - equilibrium potential
  - membrane potential
  - conductance
  - ionic current
  - sodium
  - potassium
  - action potential
  - repolarization
  - resting membrane potential
---

# Driving Force, Conductance, and Ionic Current

## Learning objectives

After completing this section, students should be able to:

1. Distinguish an ion's equilibrium potential from its driving force and ionic current.
2. Calculate the electrochemical driving force using \(V_m-E_{\text{ion}}\).
3. Explain why K+ tends to leave a resting neuron even though the intracellular side is negative.
4. Explain why opening Na+ channels drives membrane potential toward \(E_{Na}\).
5. Explain why resting membrane potential lies closer to \(E_K\) than to \(E_{Na}\).
6. Explain why an open ion channel can carry no net current when \(V_m=E_{\text{ion}}\).
7. Distinguish the rapid role of ion channels from the slower role of the Na+/K+-ATPase.
8. Identify common notation errors involving \(E_{\text{ion}}\), driving force, and \(I_{\text{ion}}\).

---

# 1. Three quantities that must not be confused

A central distinction in electrophysiology is between:

\[
E_{\text{ion}}
\]

\[
V_m-E_{\text{ion}}
\]

and:

\[
I_{\text{ion}}
\]

These represent three different physiological quantities.

---

## 1.1 Equilibrium potential

\[
\boxed{
E_{\text{ion}}
}
\]

is the equilibrium potential of a particular ion.

It represents the membrane voltage at which the electrical and chemical forces on that ion balance.

Examples:

\[
E_K\approx-90\text{ mV}
\]

\[
E_{Na}\approx+60\text{ mV}
\]

A useful interpretation is:

> \(E_{\text{ion}}\) tells us the membrane voltage toward which opening that ion's channels tends to drive \(V_m\).

---

## 1.2 Driving force

The electrochemical driving force is:

\[
\boxed{
V_m-E_{\text{ion}}
}
\]

It represents how far the actual membrane potential is from the equilibrium potential for that ion.

A useful interpretation is:

> Driving force tells us how strongly the ion is being pushed away from equilibrium.

---

## 1.3 Ionic current

Ionic current is described approximately by:

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
- \(V_m-E_{\text{ion}}\) = electrochemical driving force.

Thus current depends on both:

1. how open the pathway is;
2. how strong the electrochemical driving force is.

---

# 2. A compact interpretation of the equation

The equation:

\[
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
\]

can be read conceptually as:

\[
\boxed{
\text{current}
=
\text{how open the pathway is}
\times
\text{how strongly the ion is driven}
}
\]

Therefore:

\[
g_{\text{ion}}
\]

answers:

> How easily can the ion cross?

while:

\[
V_m-E_{\text{ion}}
\]

answers:

> How far is the system from this ion's equilibrium?

---

# 3. Why does K+ tend to leave the cell at rest?

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

The K+ driving force is:

\[
V_m-E_K
\]

\[
=
-70-(-90)
\]

\[
=
\boxed{+20\text{ mV}}
\]

The value:

\[
+20\text{ mV}
\]

is the driving force, not the current.

To obtain the current, conductance must also be included:

\[
I_K
=
g_K(+20\text{ mV})
\]

For a positively charged ion such as K+, a positive current corresponds to outward conventional current.

Thus K+ tends to leave the cell.

---

# 4. Why does K+ leave even though the inside is negative?

Two forces act on K+.

## Chemical force

Because:

\[
[K^+]_{\text{inside}}
>
[K^+]_{\text{outside}}
\]

the concentration gradient pushes K+ outward:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

---

## Electrical force

Because the intracellular side is negative, positively charged K+ is electrically attracted inward.

Thus:

\[
\text{chemical force}
\rightarrow
\text{outward}
\]

while:

\[
\text{electrical force}
\rightarrow
\text{inward}
\]

At:

\[
V_m=-70\text{ mV}
\]

the electrical force is not yet strong enough to fully balance the chemical gradient.

Equilibrium would occur closer to:

\[
E_K\approx-90\text{ mV}
\]

Therefore:

\[
\boxed{
V_m=-70\text{ mV}
>
E_K=-90\text{ mV}
}
\]

and net K+ movement remains outward.

A useful statement is:

> At -70 mV, the membrane is not negative enough to keep K+ at equilibrium.

---

# 5. Why does opening Na+ channels drive \(V_m\) toward \(E_{Na}\)?

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_{Na}=+60\text{ mV}
\]

The Na+ driving force is:

\[
V_m-E_{Na}
\]

\[
=
-70-(+60)
\]

\[
=
\boxed{-130\text{ mV}}
\]

This is a very large inward driving force for Na+.

---

## 5.1 Chemical force on Na+

Because:

\[
[Na^+]_{\text{outside}}
\gg
[Na^+]_{\text{inside}}
\]

the concentration gradient favors:

\[
Na^+_{\text{outside}}
\rightarrow
Na^+_{\text{inside}}
\]

---

## 5.2 Electrical force on Na+

The intracellular side is negative.

Because Na+ is positively charged, it is also electrically attracted inward.

Thus:

\[
\boxed{
\text{chemical force inward}
+
\text{electrical force inward}
}
\]

Both forces act in the same direction.

---

# 6. What happens when Na+ channels open?

Opening Na+ channels increases:

\[
g_{Na}
\]

Thus:

\[
I_{Na}
=
g_{Na}(V_m-E_{Na})
\]

becomes a large inward current.

Positive charge enters the cell.

This changes the charge stored across the membrane capacitor and makes:

\[
V_m
\]

less negative.

Therefore:

\[
\boxed{
V_m\rightarrow E_{Na}
}
\]

---

# 7. Important notation correction

The statement:

\[
I_{Na}=+60\text{ mV}
\]

is incorrect.

The correct quantity is:

\[
\boxed{
E_{Na}\approx+60\text{ mV}
}
\]

At rest:

\[
V_m-E_{Na}
=
-130\text{ mV}
\]

and the actual current depends on:

\[
g_{Na}
\]

Thus:

\[
\boxed{
E_{Na}
\neq
\text{driving force}
\neq
I_{Na}
}
\]

---

# 8. Why is the Na+/K+-ATPase not responsible for rapid repolarization?

The Na+/K+-ATPase operates on a slower timescale than the rapid electrical events of an action potential.

Rapid repolarization occurs mainly because:

\[
\boxed{
\text{voltage-gated Na+ channels inactivate}
}
\]

and:

\[
\boxed{
\text{voltage-gated K+ channels open}
}
\]

The resulting K+ movement is:

\[
K^+_{\text{inside}}
\rightarrow
K^+_{\text{outside}}
\]

This outward movement of positive charge repolarizes the membrane.

The Na+/K+-ATPase instead maintains Na+ and K+ concentration gradients over longer periods.

---

# 9. Why is resting \(V_m\) closer to \(E_K\) than to \(E_{Na}\)?

A common resting configuration is:

\[
E_K\approx-90\text{ mV}
\]

\[
V_m\approx-70\text{ mV}
\]

\[
E_{Na}\approx+60\text{ mV}
\]

The resting membrane is much more permeable to K+ than to Na+.

Thus:

\[
\boxed{
P_K\gg P_{Na}
}
\]

and similarly:

\[
\boxed{
g_K\gg g_{Na}
}
\]

K+ therefore has a much greater influence on resting membrane potential.

---

# 10. The resting membrane as competing ionic influences

If the membrane were permeable only to K+:

\[
V_m
\]

would approach:

\[
E_K
\]

and might lie near:

\[
-90\text{ mV}
\]

However, the membrane also has some Na+ permeability.

Na+ tends to pull membrane voltage toward:

\[
E_{Na}\approx+60\text{ mV}
\]

Therefore the actual resting membrane potential lies between these values, but much closer to \(E_K\):

```text
EK                 Vm                         ENa

-90 mV ---------- -70 mV ------------------- +60 mV
```

The reason is not that K+ can move in both directions while Na+ cannot.

The reason is that:

\[
\boxed{
\text{resting K+ permeability is much greater than resting Na+ permeability}
}
\]

---

# 11. Can both Na+ and K+ move in either direction?

Yes.

Neither ion is intrinsically restricted to only one direction.

The direction of net movement depends on:

\[
V_m-E_{\text{ion}}
\]

If membrane potential crosses an ion's reversal potential, the net current reverses direction.

Thus ion channels provide a pathway, but the electrochemical gradient determines the preferred direction of movement.

---

# 12. Why can open K+ channels carry no net current?

Suppose:

\[
V_m=E_K
\]

Then:

\[
V_m-E_K=0
\]

Substituting into:

\[
I_K
=
g_K(V_m-E_K)
\]

gives:

\[
I_K
=
g_K(0)
\]

Therefore:

\[
\boxed{
I_K=0
}
\]

This is true even if:

\[
g_K
\]

is very large.

Thousands of K+ channels could be open and still produce no net K+ current if the driving force is zero.

---

# 13. What happens microscopically at equilibrium?

At:

\[
V_m=E_K
\]

K+ ions do not necessarily stop moving.

Individual K+ ions may cross the membrane in both directions.

However:

\[
\text{outward K+ flux}
=
\text{inward K+ flux}
\]

Therefore:

\[
\boxed{
\text{net K+ flux}=0
}
\]

and:

\[
\boxed{
I_K=0
}
\]

---

# 14. A useful four-part mental model

The following four concepts should be kept distinct.

## 14.1 Equilibrium potential

\[
\boxed{
E_{\text{ion}}
}
\]

Question:

> Where does this ion tend to pull membrane voltage?

---

## 14.2 Membrane potential

\[
\boxed{
V_m
}
\]

Question:

> What is the membrane voltage right now?

---

## 14.3 Driving force

\[
\boxed{
V_m-E_{\text{ion}}
}
\]

Question:

> How far is the membrane from this ion's equilibrium?

---

## 14.4 Conductance

\[
\boxed{
g_{\text{ion}}
}
\]

Question:

> How open is the pathway for this ion?

---

# 15. From driving force to current

The final result is:

\[
\boxed{
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
}
\]

Therefore:

```text
Equilibrium potential
        |
        | compare with Vm
        v
Driving force
        |
        | multiply by conductance
        v
Ionic current
```

---

# 16. Conceptual summary

A useful way to remember the relationships is:

\[
\boxed{
E_{\text{ion}}
\rightarrow
\text{Where would this ion like }V_m\text{ to be?}
}
\]

\[
\boxed{
V_m-E_{\text{ion}}
\rightarrow
\text{How far are we from that voltage?}
}
\]

\[
\boxed{
g_{\text{ion}}
\rightarrow
\text{How open is the pathway?}
}
\]

\[
\boxed{
I_{\text{ion}}
\rightarrow
\text{What current actually results?}
}
\]

---

# 17. Common misconceptions

## Misconception 1

> \(I_K=+20\text{ mV}\)

### Correction

The value:

\[
+20\text{ mV}
\]

is the K+ driving force:

\[
V_m-E_K
\]

Current additionally depends on conductance:

\[
I_K
=
g_K(V_m-E_K)
\]

---

## Misconception 2

> \(I_{Na}=+60\text{ mV}\)

### Correction

The approximate value:

\[
+60\text{ mV}
\]

corresponds to:

\[
E_{Na}
\]

not to current.

The driving force at rest is:

\[
V_m-E_{Na}
=
-130\text{ mV}
\]

if:

\[
V_m=-70\text{ mV}
\]

---

## Misconception 3

> K+ leaves because the inside contains too much positive electrical charge.

### Correction

The bulk cytoplasm remains approximately electrically neutral.

K+ leaves because its concentration gradient pushes it outward, and at resting membrane potential the opposing electrical force is not strong enough to completely balance that chemical force.

---

## Misconception 4

> K+ can move both ways through the membrane, but Na+ cannot.

### Correction

Both ions can move in either direction through suitable open channels.

The direction of net movement depends on their electrochemical driving forces.

At rest, the membrane is simply much more permeable to K+ than to Na+.

---

## Misconception 5

> If many channels are open, there must be a large current.

### Correction

Current also requires a driving force.

If:

\[
V_m=E_{\text{ion}}
\]

then:

\[
I_{\text{ion}}=0
\]

even if conductance is very high.

---

# 18. Concept-check questions

## Question 1

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

What is the K+ driving force?

### Answer

\[
V_m-E_K
=
-70-(-90)
\]

\[
=
\boxed{+20\text{ mV}}
\]

---

## Question 2

Does:

\[
+20\text{ mV}
\]

represent \(I_K\)?

### Answer

No.

It represents the electrochemical driving force.

Current also depends on:

\[
g_K
\]

---

## Question 3

Suppose:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_{Na}=+60\text{ mV}
\]

Calculate the Na+ driving force.

### Answer

\[
V_m-E_{Na}
=
-70-(+60)
\]

\[
=
\boxed{-130\text{ mV}}
\]

---

## Question 4

Why is the Na+ driving force large at rest?

### Answer

Because both:

- the chemical concentration gradient;
- the electrical gradient;

favor Na+ entry.

---

## Question 5

Why does resting membrane potential lie closer to \(E_K\) than to \(E_{Na}\)?

### Answer

Because resting membrane permeability and conductance to K+ are much greater than those to Na+.

Thus K+ exerts a stronger influence on membrane voltage.

---

## Question 6

If:

\[
V_m=E_K
\]

and many K+ channels are open, what is:

\[
I_K
\]

?

### Answer

\[
\boxed{I_K=0}
\]

because:

\[
V_m-E_K=0
\]

---

# 19. Short application exercises

## Exercise 1

A neuron has:

\[
V_m=-60\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

Calculate the K+ driving force.

### Solution

\[
-60-(-90)
=
\boxed{+30\text{ mV}}
\]

The driving force favors outward K+ current.

---

## Exercise 2

A neuron has:

\[
V_m=-60\text{ mV}
\]

and:

\[
E_{Na}=+60\text{ mV}
\]

Calculate the Na+ driving force.

### Solution

\[
-60-(+60)
=
\boxed{-120\text{ mV}}
\]

This strongly favors inward Na+ current if Na+ channels are open.

---

## Exercise 3

Suppose a cell has:

\[
V_m=E_{Na}
\]

but:

\[
g_{Na}
\]

is very high.

What is the net Na+ current?

### Solution

\[
V_m-E_{Na}=0
\]

therefore:

\[
I_{Na}
=
g_{Na}(0)
=
\boxed{0}
\]

---

# 20. Higher-order reasoning questions

## Question 1

Why does a large driving force not necessarily produce a large ionic current?

### Expected answer

Because current also depends on conductance.

If very few channels are open:

\[
g_{\text{ion}}
\]

may be very small, so current remains small even when:

\[
V_m-E_{\text{ion}}
\]

is large.

---

## Question 2

Why does a large conductance not necessarily produce a large ionic current?

### Expected answer

Because the driving force may be small.

At:

\[
V_m=E_{\text{ion}}
\]

the driving force is zero, so current is zero regardless of conductance.

---

## Question 3

Why does increasing K+ conductance during an action potential produce repolarization?

### Expected answer

During the action-potential peak, membrane voltage is far more positive than:

\[
E_K
\]

This creates a large outward K+ driving force.

Increasing:

\[
g_K
\]

therefore produces a large outward K+ current, carrying positive charge out of the cell and moving:

\[
V_m
\]

toward:

\[
E_K
\]

---

# 21. Instructor notes

## Teaching emphasis 1

Students frequently confuse:

\[
E_{\text{ion}}
\]

with:

\[
I_{\text{ion}}
\]

because both are introduced near the same time.

Require units whenever possible.

Equilibrium potential and driving force are measured in:

\[
\text{mV}
\]

whereas current is measured in units such as:

\[
\text{A}
\]

or:

\[
\text{pA}
\]

---

## Teaching emphasis 2

A useful verbal sequence is:

> Equilibrium potential tells you where the ion wants voltage to go.

> Driving force tells you how far away the membrane is from that point.

> Conductance tells you how open the pathway is.

> Current tells you what actually flows.

---

## Teaching emphasis 3

When students say that the cell has "too many positive ions inside," redirect them toward:

- concentration gradients;
- electrochemical forces;
- local charge separation at the membrane.

Avoid implying that the bulk cytoplasm carries a large net electrical charge.

---

## Teaching emphasis 4

When discussing resting potential, emphasize:

\[
P_K\gg P_{Na}
\]

rather than implying that Na+ is unable to cross the membrane.

---

# 22. Short student summary

The equilibrium potential:

\[
E_{\text{ion}}
\]

is the voltage at which an ion is in electrochemical equilibrium.

The difference:

\[
V_m-E_{\text{ion}}
\]

is the ion's driving force.

The actual current depends on both driving force and conductance:

\[
\boxed{
I_{\text{ion}}
=
g_{\text{ion}}
(V_m-E_{\text{ion}})
}
\]

For K+ at rest:

\[
V_m=-70\text{ mV}
\]

and:

\[
E_K=-90\text{ mV}
\]

so:

\[
V_m-E_K=+20\text{ mV}
\]

which favors outward K+ current.

For Na+:

\[
E_{Na}=+60\text{ mV}
\]

so at:

\[
V_m=-70\text{ mV}
\]

the driving force is:

\[
-130\text{ mV}
\]

which strongly favors Na+ entry.

Resting membrane potential lies closer to \(E_K\) because resting K+ permeability is much greater than Na+ permeability.

Finally, an open channel does not necessarily carry net current.

At:

\[
V_m=E_{\text{ion}}
\]

the driving force is zero and therefore:

\[
I_{\text{ion}}=0
\]

even if conductance is very high.
```