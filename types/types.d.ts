export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  prefectures: Array<Maybe<Prefecture>>;
  cities: Array<Maybe<City>>;
  broadIndustries: BroadIndustryConnection;
  middleIndustries: Array<Maybe<MiddleIndustry>>;
  narrowIndustries: Array<Maybe<NarrowIndustry>>;
  broadJobs: Array<Maybe<BroadJob>>;
  middleJobs: Array<Maybe<MiddleJob>>;
  broadPatents: Array<Maybe<BroadPatent>>;
  middlePatents: Array<Maybe<MiddlePatent>>;
  patentLocations: Array<Maybe<PatentLocation>>;
  customs: Array<Maybe<Customs>>;
  regions: Array<Maybe<Region>>;
  countries: Array<Maybe<Country>>;
  agricultureDepartments: Array<Maybe<AgricultureDepartment>>;
  broadTradeInfoItems: Array<Maybe<BroadTradeInfoItem>>;
  middleTradeInfoItems: Array<Maybe<MiddleTradeInfoItem>>;
  narrowTradeInfoItems: Array<Maybe<NarrowTradeInfoItem>>;
  populations?: Maybe<PopulationComposition>;
  populationPyramid?: Maybe<PopulationPyramid>;
  populationChangeRate?: Maybe<PopulationChangeRate>;
  wages?: Maybe<Wages>;
};


export type QueryCitiesArgs = {
  prefCode: Scalars['ID'];
};


export type QueryBroadIndustriesArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryMiddleIndustriesArgs = {
  sicCode: Scalars['ID'];
};


export type QueryNarrowIndustriesArgs = {
  simcCode: Scalars['ID'];
};


export type QueryMiddleJobsArgs = {
  iscoCode: Scalars['ID'];
};


export type QueryMiddlePatentsArgs = {
  tecCode: Scalars['ID'];
};


export type QueryPatentLocationsArgs = {
  prefCode: Scalars['ID'];
  cityCode: Scalars['ID'];
};


export type QueryCustomsArgs = {
  prefCode: Scalars['ID'];
};


export type QueryCountriesArgs = {
  regionCode: Scalars['ID'];
};


export type QueryMiddleTradeInfoItemsArgs = {
  itemCode1: Scalars['ID'];
};


export type QueryNarrowTradeInfoItemsArgs = {
  itemCode1: Scalars['ID'];
  itemCode2: Scalars['ID'];
};


export type QueryPopulationsArgs = {
  prefCode: Scalars['ID'];
  cityCode: Scalars['ID'];
  addArea?: Maybe<Scalars['String']>;
};


export type QueryPopulationPyramidArgs = {
  prefCode: Scalars['ID'];
  cityCode: Scalars['ID'];
  yearLeft: Scalars['ID'];
  yearRight: Scalars['ID'];
  addArea?: Maybe<Scalars['ID']>;
};


export type QueryPopulationChangeRateArgs = {
  prefCode: Scalars['ID'];
  cityCode: Scalars['ID'];
  addArea?: Maybe<Scalars['ID']>;
};


export type QueryWagesArgs = {
  prefCode: Scalars['ID'];
  sicCode: Scalars['ID'];
  simcCode: Scalars['ID'];
  wagesAge: WagesAge;
};

export type Prefecture = {
  __typename?: 'Prefecture';
  prefCode?: Maybe<Scalars['Int']>;
  prefName?: Maybe<Scalars['String']>;
};

export type City = {
  __typename?: 'City';
  prefCode: Scalars['ID'];
  cityCode?: Maybe<Scalars['Int']>;
  cityName?: Maybe<Scalars['String']>;
  bigCityFlag?: Maybe<Scalars['String']>;
};

export type BroadIndustryConnection = {
  __typename?: 'BroadIndustryConnection';
  cursor: Scalars['String'];
  hasMore: Scalars['Boolean'];
  broadIndustries: Array<Maybe<BroadIndustry>>;
};

export type BroadIndustry = {
  __typename?: 'BroadIndustry';
  sicCode?: Maybe<Scalars['String']>;
  sicName?: Maybe<Scalars['String']>;
};

export type MiddleIndustry = {
  __typename?: 'MiddleIndustry';
  sicCode?: Maybe<Scalars['String']>;
  simcCode?: Maybe<Scalars['String']>;
  simcName?: Maybe<Scalars['String']>;
};

export type NarrowIndustry = {
  __typename?: 'NarrowIndustry';
  simcCode?: Maybe<Scalars['String']>;
  siscCode?: Maybe<Scalars['String']>;
  siscName?: Maybe<Scalars['String']>;
};

export type BroadJob = {
  __typename?: 'BroadJob';
  iscoCode?: Maybe<Scalars['String']>;
  iscoName?: Maybe<Scalars['String']>;
};

export type MiddleJob = {
  __typename?: 'MiddleJob';
  iscoCode?: Maybe<Scalars['String']>;
  ismcoCode?: Maybe<Scalars['String']>;
  ismcoName?: Maybe<Scalars['String']>;
};

export type BroadPatent = {
  __typename?: 'BroadPatent';
  tecCode?: Maybe<Scalars['String']>;
  tecName?: Maybe<Scalars['String']>;
};

export type MiddlePatent = {
  __typename?: 'MiddlePatent';
  tecCode?: Maybe<Scalars['String']>;
  tecName?: Maybe<Scalars['String']>;
  themeCode?: Maybe<Scalars['String']>;
  themeName?: Maybe<Scalars['String']>;
};

export type PatentLocation = {
  __typename?: 'PatentLocation';
  prefCode?: Maybe<Scalars['String']>;
  prefName?: Maybe<Scalars['String']>;
  cityCode?: Maybe<Scalars['String']>;
  cityName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Customs = {
  __typename?: 'Customs';
  customHouseCode?: Maybe<Scalars['String']>;
  customHouseName?: Maybe<Scalars['String']>;
  prefCode?: Maybe<Scalars['String']>;
  prefName?: Maybe<Scalars['String']>;
};

export type Region = {
  __typename?: 'Region';
  regionCode?: Maybe<Scalars['String']>;
  regionName?: Maybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  regionCode?: Maybe<Scalars['String']>;
  regionName?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
};

export type AgricultureDepartment = {
  __typename?: 'AgricultureDepartment';
  sectionCode?: Maybe<Scalars['String']>;
  sectionName?: Maybe<Scalars['String']>;
};

export type BroadTradeInfoItem = {
  __typename?: 'BroadTradeInfoItem';
  itemCode1?: Maybe<Scalars['String']>;
  itemName1?: Maybe<Scalars['String']>;
};

export type MiddleTradeInfoItem = {
  __typename?: 'MiddleTradeInfoItem';
  itemCode1?: Maybe<Scalars['String']>;
  itemName1?: Maybe<Scalars['String']>;
  itemCode2?: Maybe<Scalars['String']>;
  itemName2?: Maybe<Scalars['String']>;
};

export type NarrowTradeInfoItem = {
  __typename?: 'NarrowTradeInfoItem';
  itemCode1?: Maybe<Scalars['String']>;
  itemName1?: Maybe<Scalars['String']>;
  itemCode2?: Maybe<Scalars['String']>;
  itemName2?: Maybe<Scalars['String']>;
  itemCode3?: Maybe<Scalars['String']>;
  itemName3?: Maybe<Scalars['String']>;
};

export type PopulationComposition = {
  __typename?: 'PopulationComposition';
  boundaryYear?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<PopulationCompositionConnection>>>;
};

export type PopulationCompositionConnection = {
  __typename?: 'PopulationCompositionConnection';
  label?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<PopulationCompositionData>>>;
};

export type PopulationCompositionData = {
  __typename?: 'PopulationCompositionData';
  year: Scalars['Int'];
  value: Scalars['Int'];
  rate?: Maybe<Scalars['Float']>;
};

export type PopulationPyramid = {
  __typename?: 'PopulationPyramid';
  yearLeft?: Maybe<PopulationPyramidYear>;
  yearRight?: Maybe<PopulationPyramidYear>;
};

export type PopulationPyramidYear = {
  __typename?: 'PopulationPyramidYear';
  year?: Maybe<Scalars['Int']>;
  oldAgeCount?: Maybe<Scalars['Int']>;
  oldAgePercent?: Maybe<Scalars['Int']>;
  middleAgeCount?: Maybe<Scalars['Int']>;
  middleAgePercent?: Maybe<Scalars['Int']>;
  newAgeCount?: Maybe<Scalars['Int']>;
  newAgePercent?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<PopulationPyramidData>>>;
};

export type PopulationPyramidData = {
  __typename?: 'PopulationPyramidData';
  class?: Maybe<Scalars['String']>;
  man?: Maybe<Scalars['Int']>;
  manPercent?: Maybe<Scalars['Float']>;
  woman?: Maybe<Scalars['Int']>;
  womanPercent?: Maybe<Scalars['Float']>;
};

export type PopulationChangeRate = {
  __typename?: 'PopulationChangeRate';
  line?: Maybe<PopulationChangeRateLine>;
  bar?: Maybe<PopulationChangeRateBar>;
};

export type PopulationChangeRateLine = {
  __typename?: 'PopulationChangeRateLine';
  boundaryYear: Scalars['Int'];
  data: Array<Maybe<PopulationChangeRateLineData>>;
};

export type PopulationChangeRateLineData = {
  __typename?: 'PopulationChangeRateLineData';
  year: Scalars['Int'];
  value: Scalars['Float'];
};

export type PopulationChangeRateBar = {
  __typename?: 'PopulationChangeRateBar';
  data: Array<Maybe<PopulationChangeRateBarData>>;
};

export type PopulationChangeRateBarData = {
  __typename?: 'PopulationChangeRateBarData';
  year: Scalars['Int'];
  sum: Scalars['Float'];
  class: Array<Maybe<PopulationChangeRateBarClass>>;
};

export type PopulationChangeRateBarClass = {
  __typename?: 'PopulationChangeRateBarClass';
  label: Scalars['String'];
  value: Scalars['Float'];
};

export type Wages = {
  __typename?: 'Wages';
  prefCode?: Maybe<Scalars['Int']>;
  prefName?: Maybe<Scalars['String']>;
  sicName?: Maybe<Scalars['String']>;
  sicCode?: Maybe<Scalars['String']>;
  simcName?: Maybe<Scalars['String']>;
  simcCode?: Maybe<Scalars['String']>;
  data: Array<Maybe<WageData>>;
};

export type WageData = {
  __typename?: 'WageData';
  year?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export enum WagesAge {
  All = 'ALL',
  Until_19 = 'UNTIL_19',
  Between_20And_24 = 'BETWEEN_20_AND_24',
  Between_25And_29 = 'BETWEEN_25_AND_29',
  Between_30And_34 = 'BETWEEN_30_AND_34',
  Between_35And_39 = 'BETWEEN_35_AND_39',
  Between_40And_44 = 'BETWEEN_40_AND_44',
  Between_45And_49 = 'BETWEEN_45_AND_49',
  Between_50And_54 = 'BETWEEN_50_AND_54',
  Between_55And_59 = 'BETWEEN_55_AND_59',
  Between_60And_64 = 'BETWEEN_60_AND_64',
  Between_65And_69 = 'BETWEEN_65_AND_69',
  Since_70 = 'SINCE_70'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

