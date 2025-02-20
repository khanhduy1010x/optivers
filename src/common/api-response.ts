export class ApiResponse<T> {
    code: number;
    message: string;
    data: NonNullable<T> | null;
  
    constructor(data: NonNullable<T> | null = null) {
      this.code = 1000;
      this.message = 'success';
      this.data = data;
    }
  }
  