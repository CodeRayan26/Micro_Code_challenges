# Challenge: Anfaq Ghaza 1

## Challenge Level: Easy

## Description

You are responsible for managing resources transported through a network of underground tunnels in gaza. Each tunnel has a specific capacity for transporting ressources. Based on the needs, you must calculate how much of each resource can be transported using the available tunnels. Your goal is to optimize transportation to meet the needs as efficiently as possible.

## Input

1. tunnels: An object containing the name of each tunnel as a key and its maximum transport capacity (in units) as a value.
2. ressources: A number specifying the amounts of ressources required.

## Output

An object containing:

- ressourcesTransported: The total amount of ressources transported.
- tunnelsUsed: An array containing the names of the tunnels used for transport.

## Notes

- The loop will stop as soon as the required amount is transported or if no tunnels can be used without exceeding the requirement.
- The algorithm optimizes by using larger tunnels first, if possible.

- Example 1:

input:

```js
tunnels = [100, 200, 50];
ressources = 250;
```

output:

```js
{
  "ressourcesTransported": 250,
  "tunnelsUsed": [1, 2]
}
```

Explanation:

- The tunnel with capacity 200 (index 1) is used first.
- Then, the tunnel with capacity 50 (index 2) is used.

- Example 2:

input:

```js
tunnels = [50, 100, 10];
ressources = 80;
```

output:

```js
{
  "ressourcesTransported": 80,
  "tunnelsUsed": [0, 2, 2, 2]
}
```

- Example 3:

input:

```js
tunnels = [300, 50, 100];
ressources = 520;
```

output:

```js
{
  "ressourcesTransported": 500,
  "tunnelsUsed": [ 0, 2, 2 ]
}

```
