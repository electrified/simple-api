const createCreatedHandler = (res) => {
  return (data) => {
    res.status(201).json(data);
  };
};

const createSuccessHandler = (res) => {
  return (data) => {
    data ? res.status(200).json(data) : res.sendStatus(200);
  };
};

const createErrorHandler = (res) => {
  return (err) => {
    const message = err.message || 'Unspecfied server error';
    res.status(500).json({ message });
  };
};

module.exports = {
  createCreatedHandler,
  createSuccessHandler,
  createErrorHandler,
};
