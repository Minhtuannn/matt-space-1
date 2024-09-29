---
layout: '../../layouts/Post.astro'
title: Differences Between Off-Policy Actor-Critic (DPG) vs. Stochastic Policy Gradient Theorems
# image: 
publishedAt: 2024-09-29
category: 'ai', 'drl'
---

[image](https://unsplash.it/400/300)

## Compare between two type of policies:

*Action Selection**:
   - **Off-Policy Actor-Critic (DPG)**: Uses a deterministic target policy \( \mu_\theta(s) \) and learns off-policy using exploratory data from a different stochastic behavior policy.
   - **Stochastic Policy Gradient**: Uses a stochastic policy \( \pi_\theta(a|s) \) for both exploration and exploitation.

2. **Policy Gradient**:
   - **DPG**: Policy gradient is computed as \( \nabla_\theta J(\mu_\theta) = \mathbb{E}_{s \sim \rho^\mu} [\nabla_\theta \mu_\theta(s) \nabla_a Q^\mu(s, a)] \), integrating only over the state space.
   - **Stochastic Policy Gradient**: Includes integration over both state and action spaces \( \nabla_\theta J(\pi_\theta) = \mathbb{E}_{s \sim \rho^\pi, a \sim \pi_\theta} [\nabla_\theta \log \pi_\theta(a|s) Q^\pi(s, a)] \).

3. **Sample Efficiency**:
   - **DPG**: More sample-efficient, especially in high-dimensional action spaces, as it avoids integrating over the action space.
   - **Stochastic Policy Gradient**: Typically requires more samples because the gradient involves integrating over both states and actions.

4. **Exploration vs. Exploitation**:
   - **DPG**: Separates exploration (via stochastic behavior policy) and exploitation (via deterministic target policy).
   - **Stochastic Policy Gradient**: The same stochastic policy is used for both exploration and exploitation, making exploration dependent on the policy’s variance.

In summary, **DPG** is more efficient in high-dimensional spaces and decouples exploration and exploitation, while **stochastic policy gradient** methods are more straightforward but computationally heavier in large action spaces.
