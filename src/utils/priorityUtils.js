const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getPriorityNotifications = (
  notifications,
  count = 10
) => {
  const sorted = [...notifications].sort((a, b) => {
    const weightDifference =
      weights[b.Type] - weights[a.Type];

    if (weightDifference !== 0) {
      return weightDifference;
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });

  return sorted.slice(0, count);
};