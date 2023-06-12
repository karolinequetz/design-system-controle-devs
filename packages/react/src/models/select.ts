import { OnChangeValue } from 'react-select';

export interface Options {
  value: string;
  label: string;
}

export type MultiValueProps = OnChangeValue<Options, true>;
