export const handleFavoriteError = (error: unknown) => {
  if (error instanceof Error) {
    console.log(error.message);
  } else if (typeof error === 'string') {
    console.log(error);
  }
};
