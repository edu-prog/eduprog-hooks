import React, {useCallback} from "react";

export const useForceUpdate = () => {
  const [, dispatch] = React.useState<{}>(Object.create(null));

	return useCallback(() => {
		dispatch(Object.create(null));
	}, [dispatch]);
};
