
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { X } from "lucide-react";
import React, { Component, ReactNode } from "react";

export class RegisterServiceForm extends Component<any, any> {
  render() {
    const { isOpen, isClosed } = this.props;
    return (
      <>
        <Modal isOpen={isOpen} onClose={isClosed}>
          <ModalContent>
            {(onClose) => (
              <div>
                <ModalHeader>
                  <div className="w-full flex justify-between items-center">
                    <h1>Registrar Serviço</h1>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <Input label="Nome" />
                  <Input label="Preço" />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    className="text-red-600 bg-opacity-20"
                    onPress={onClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    color="success"
                    className="text-green-600 bg-opacity-20"
                    onPress={onClose}
                  >
                    Confirmar
                  </Button>
                </ModalFooter>
              </div>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
}
