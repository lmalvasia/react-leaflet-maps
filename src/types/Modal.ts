export default interface IModal {
  show: boolean,
  type: string,
  data: {
    [key: string]: any
  };
}
