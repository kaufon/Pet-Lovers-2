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
import { CircleDashed, DollarSign, Pen, PlusIcon, Trash } from "lucide-react";
import { RegisterClientForm } from "./register-client-form";
import { AlertModal } from "../../commons/alert-modal";
import { ConsumeForm } from "./consume-form";

export class DashBoardPage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isAlertModalOpen: false,
      isConsumeModalOpen: false,
    };
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  openAlertModal = () => {
    this.setState({ isAlertModalOpen: true });
  };
  closeAlertModal = () => {
    this.setState({ isAlertModalOpen: false });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  openConsumeModal = () => {
    this.setState({ isConsumeModalOpen: true });
  };
  closeConsumeModal = () => {
    this.setState({ isConsumeModalOpen: false });
  };

  render() {
    return (
      <>
        <Button color="default" onClick={this.openModal}>
          Adicionar Cliente
        </Button>
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
                    <DollarSign onClick={this.openConsumeModal} />
                  </Tooltip>
                  <Tooltip content="Editar  ">
                    <Pen />
                  </Tooltip>
                  <Tooltip content="Deletat">
                    <Trash onClick={this.openAlertModal} />
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <RegisterClientForm
          isOpen={this.state.isModalOpen}
          isClosed={this.closeModal}
        />
        <ConsumeForm
          isOpen={this.state.isConsumeModalOpen}
          isClosed={this.closeConsumeModal}
        />
        <AlertModal
          isOpen={this.state.isAlertModalOpen}
          isClosed={this.closeAlertModal}
        />
      </>
    );
  }
}
