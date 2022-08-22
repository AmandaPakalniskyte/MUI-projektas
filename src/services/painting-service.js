const domain = 'http://localhost:8000';

const update = async ({ id, ...updateProps }) => {
  const response = await fetch(`${domain}/paintings/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateProps),
  });
  const responseData = await response.json();

  return responseData;
};

const fetchAll = async () => {
  const response = await fetch(`${domain}/paintings?_expand=category&_expand=size&_expand=color`);
  const paintings = await response.json();

  return paintings;
};

const PaintingService = {
  fetchAll,
  update,
};

export default PaintingService;
