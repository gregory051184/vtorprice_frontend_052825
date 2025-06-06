export interface IRecyclableCategoryShortForAll {
  id: number;
  name: string;
}


export interface IRecyclableShortForAll {
  id: number;
  name: string;
  category: IRecyclableCategoryShortForAll
}


export interface IRecyclable {
  id: number;
  isDeleted: boolean;
  createdAt: Date;
  name: string;
  description: string;
  category: IRecyclableCategory
}

export interface IRecyclableCategory {
  id: number;
  isDeleted: boolean;
  createdAt: Date;
  name: string;
  lft: number;
  rght: number;
  treeId: number;
  level: number;
  parent: number;
  //ДОБАВИЛ
  image?: string;
  total_volume?: number,
  apps_number?: number,
  deals_number?: number
}
