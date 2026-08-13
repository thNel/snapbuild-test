export interface UseCaseFeature {
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

export interface UseCaseMode {
  features: UseCaseFeature[];
  id: string;
  label: string;
}
