"use client";
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
import { Pen } from "lucide-react";
import { Component, ReactNode } from "react";
import { RegisterServiceForm } from "./register-service-form";

export class ServicesPage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  render() {
    return (
      <>
        <Button color="default" onClick={this.openModal}>Adicionar Serviço</Button>
        <Table selectionMode="single" shadow="md">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nome</TableColumn>
            <TableColumn>Preço</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ID do serviço</TableCell>
              <TableCell>Nome do serviço</TableCell>
              <TableCell>preço do serviço</TableCell>
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
        <RegisterServiceForm
          isOpen={this.state.isModalOpen}
          isClosed={this.closeModal}
        />
      </>
    );
  }
}
