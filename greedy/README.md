# Greedy Algorithms

Greedy is a strategy to solve various problems optimally. A greedy algorithm constructs a solution to the problem by always making a choice that looks the best at the moment. A greedy algorithms never takes back its choices, but directly constructs the final solution. For this reason, greedy algorithms are usually efficient. This method is used for solving optimization problems. An optimization problem is about finding the best solution among all feasible solutions, like finding the minimum or maximum values.
The main function of this approach is that the decision is taken on the basis of the currently available information.

Greedy Algorithms Rules:

- Always pick the best choice at any step.
- Works on the assumption that by picking a local optimum solution at each step we will reach a global optimum.
- The greedy algorithm never reconsiders its choices.

## Components of greedy algorithm

- **Candidate Set:** A solution that is created from the set is known as a candidate set.
- **Solution Function:** This function is used to choose the candidate or subset which can be added in the solution.
- **Feasibility Function:** A function that is used to determine whether the candidate or subset can be used to contribute to the solution or not.
- **Objective Function:** A function is used to assign the value to the solution or the partial solution.
- **Objective Function:** A function is ued to assign the value to the solution or the partial solution.
- **Solution Function:** This function is used to intimate whether the complete function has been reached or not.

## Applications of Greedy Algorithm

- It is used in finding the shortest path.
- It is used to find the minimum spanning tree using the prim's algorithms or the Kruskal's algorithm.
- It is used in a job sequencing with a deadline.
- This algorithms is also used to solve the fractional knapsack problem.

## Example

Suppose there is a problem `P`. I want to travel from A to Be shown as below:
**P: A --> B**
The problem is that we have to travel this journey from A to B. There are various solutions to go from A to B We can go from A to B by **walk, car, bike, train, airplane, etc.** There is a constraint in the journey that we have to travel journey within 12 hours. If I go only by train or airplane, then, I can cover this distance within 12 hours. There are many solutions to this problem but here are only two solution that satisfy the constraint.

If we say that we have to cover the journey at the minimum const. This means that we have to travel this distance as minimum as possible, so this problem is known as **minimization problem**. Till now, we have two feasible solutions, i.e., one using the train, and the other using the air. Since traveling by train will lead to the minimum cost so it is an optimal solution. An optimal solution is also the feasible solution, but providing the best result, so that solution is the optimal solution with the minimum const. There would be only one optimal solution.
