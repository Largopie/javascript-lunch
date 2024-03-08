type SelectedDataType = {
  sorting: {
    id: string;
    name: string;
    options: {
      [key: string]: string;
    };
  };
  category: {
    id: string;
    name: string;
    options: {
      [key: string]: string;
    };
  };
};

type RulesType = {
  requiredIds: string[];
  selectIds: string[];
};

type ConvertType = {
  [key: string]: string;
};