import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";
import Layout from "../layout/Layout";
import { Card, Text, Metric, DonutChart, ProgressBar } from "@tremor/react";



export default function Dashboard() {
    return(
        <Layout>
            <h1>Monitoreos Estadisticos</h1>
            <Card className="max-w-xs mx-auto">
             <Text>Progreso Sistema JEBCA</Text>
            <Metric>40%</Metric>
             <ProgressBar value={40} className="mt-2" />
            </Card>
        </Layout>
    )
} 





/*

const ills = [
    {
      name: "Fiebre",
      sales: 40,
    },
    {
      name: "Gripe",
      sales: 60,
    },
    {
      name: "Diabetes",
      sales: 60,
    },
    {
      name: "Hipertension",
      sales: 70,
    },
    {
      name: "Asma",
      sales: 10,
    },
    {
      name: "Dolor de Cabeza",
      sales: 30,
    },
  ];
  
 // const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;
  




export function Dashboard2 () {
    return(
    <Layout>
        <Card className="max-w-lg">
          <Title>Sales</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
    </Layout>
    )
 }

 */