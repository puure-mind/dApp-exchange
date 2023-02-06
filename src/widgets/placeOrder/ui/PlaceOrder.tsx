import { CardContent, CardTitle } from "shared/ui/Card";
import { Button, Card, Tab, Tabs } from "../../../shared/ui";

export const PlaceOrder = () => {
  const cardStyle = {
    padding: "34px 12px",
    height: "100%",
  };

  return (
    <div style={{ height: "100vh", marginTop: "50px" }}>
      <Card sx={cardStyle}>
        <CardTitle>Place the Order</CardTitle>
        <CardContent>
          <OrderTabs />
          {/*<OrderSide />*/}
          {/*<LimitOrder />*/}
          {/*<MarketOrder />*/}
        </CardContent>
      </Card>
    </div>
  );
};

const OrderTabs = () => {
  const sx = {
    margin: "16px 0 30px",
    display: "inline",
  };

  return (
    <div style={sx}>
      <Tabs>
        <Tab index={0} title={"Limit"} />
        <Tab index={1} title={"Market"} />
      </Tabs>
    </div>
  );
};
