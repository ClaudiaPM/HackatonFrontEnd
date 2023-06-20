import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";
import Layout from "../layout/Layout";
import { Card, Text, Metric, DonutChart, ProgressBar } from "@tremor/react";
import BarChart1 from "../components/BarChart";

export default function Dashboard() {
    return(
        <Layout>
            <div className="mb-5 grid grid-cols-3 gap-5">
                <div className="">
                    <h2>Monitoreos Estadisticos</h2>
                    <Card className="max-w-xs mx-auto">
                    <Text>Progreso Sistema JEBCA</Text>
                    <Metric>40%</Metric>
                    <ProgressBar value={40} className="mt-2" />
                    </Card>
                </div>
                <div>
                    <h2>Monitoreos Estadisticos</h2>
                    <Card className="max-w-xs mx-auto">
                    <Text>Progreso Interfax Medica</Text>
                    <Metric>60%</Metric>
                    <ProgressBar value={60} className="mt-2" />
                    </Card>
                </div>
            </div>
            <BarChart1/>
        </Layout>
    )
} 



