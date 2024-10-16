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

export class PetsPage extends Component<any, any> {
  render() {
    return (
      <>
        <Button color="default">Adicionar Pet</Button>
        <Table selectionMode="single" shadow="md">
          <TableHeader>
            <TableColumn>ID do Dono</TableColumn>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nome</TableColumn>
            <TableColumn>Raça</TableColumn>
            <TableColumn>Tipo</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ID do dono do Cão</TableCell>
              <TableCell>ID do Joaozinho</TableCell>
              <TableCell>Nome do Cão</TableCell>
              <TableCell>Raça do Cão</TableCell>
              <TableCell>Cachorro</TableCell>
              <TableCell>
                <div className="flex flex-row gap-3 text-zinc-400">
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
