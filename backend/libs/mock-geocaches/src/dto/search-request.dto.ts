import { Filters } from '../interfaces/filters.interface';

export class SearchRequestDto {
  filters!: Filters;
  orderBy?: 'newest';
  skip?: number;
  take?: number;
}