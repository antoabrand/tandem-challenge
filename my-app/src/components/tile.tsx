import { Card, CardContent, Typography } from '@material-ui/core';

export function Tile(props: any) {
  const { title, value } = props;
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{value}</Typography>
      </CardContent>
    </Card>
  );
}
