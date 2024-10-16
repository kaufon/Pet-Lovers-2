"use client";
import React, { Component } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { CircleDashed, DollarSign, Pen, PlusIcon } from "lucide-react";

export class DashBoardPage extends Component<any, any> {
  render() {
    return (
      <>
        <Button color="default">Adicionar Cliente</Button>
        <Table selectionMode="single" shadow="md">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nome</TableColumn>
            <TableColumn>CPF</TableColumn>
            <TableColumn>Pets</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ID do Joaozinho</TableCell>
              <TableCell>Nome do Joaozinho</TableCell>
              <TableCell>Cpf do Joazinho</TableCell>
              <TableCell>Pets do Joazinho</TableCell>
              <TableCell>
                <div className="flex flex-row gap-3 text-zinc-400">
                  <Tooltip content="Consumir ">
                    <DollarSign />
                  </Tooltip>
                  <Tooltip content="Editar  ">
                    <Pen />
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  }
}
