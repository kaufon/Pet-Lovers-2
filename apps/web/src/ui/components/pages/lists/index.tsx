"use client";
import {
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { Pen } from "lucide-react";
import { Component, ReactNode } from "react";

export class ListsPage extends Component<any, any> {
  render() {
    return (
      <>
        <Select label="Selecione a listagem">
          <SelectItem key="mostwanted">Produts Mais Consumidos</SelectItem>
          <SelectItem key="top5">Top 5 clientes que mais gastaram</SelectItem>
          <SelectItem key="top10">
            Top 10 clientes que mais consumiram
          </SelectItem>
          <SelectItem key="perRace">Mais consumido por raça</SelectItem>
          <SelectItem key="perType">Mais consumido por tipo de pet</SelectItem>
        </Select>
      </>
    );
  }
}
