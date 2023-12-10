const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

const cars = `${baseURL}/cars`;

const carUrls = {
  cars: {
    base: cars,
    byId: (id: number | string): string => `${cars}/${id}`,
  }
}

export {
  carUrls
}
