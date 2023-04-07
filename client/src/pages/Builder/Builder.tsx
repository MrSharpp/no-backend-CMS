import { Box, Button } from '@mantine/core';
import BuilderNavigator from './BuilderNavigator';
import BuilderEditor from './BuilderEditor';

function ViewBuilder() {
  return (
    <div>
      <div className="flex m-10 gap-14">
        <div className="flex-2">
          <BuilderNavigator />
        </div>
        <div className="flex-1">
          <BuilderEditor />
        </div>
      </div>
    </div>
  );
}

export default ViewBuilder;
